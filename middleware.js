import { NextResponse } from "next/server";

// Rate limiting simple en el edge de Vercel.
// Usa un Map en memoria — se resetea por instancia de edge worker,
// pero es suficiente para frenar bots básicos sin dependencias externas.

const WINDOW_MS = 60 * 1000; // ventana de 1 minuto
const MAX_REQUESTS = 120;     // máximo de peticiones por IP por ventana

// Map: ip -> { count, windowStart }
const ipMap = new Map();

function isRateLimited(ip) {
    const now = Date.now();
    const entry = ipMap.get(ip);

    if (!entry || now - entry.windowStart > WINDOW_MS) {
        ipMap.set(ip, { count: 1, windowStart: now });
        return false;
    }

    entry.count++;

    if (entry.count > MAX_REQUESTS) {
        return true;
    }

    return false;
}

export function middleware(request) {
    const ip =
        request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        request.headers.get("x-real-ip") ??
        "unknown";

    if (isRateLimited(ip)) {
        return new NextResponse("Too Many Requests", {
            status: 429,
            headers: {
                "Retry-After": "60",
                "Content-Type": "text/plain",
            },
        });
    }

    return NextResponse.next();
}

export const config = {
    // Aplica a todas las rutas excepto assets estáticos y archivos internos de Next.js
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|og-image.png|.*\\.png$|.*\\.jpg$).*)",
    ],
};
