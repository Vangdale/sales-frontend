import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: "Ofertas de Videojuegos",
    description: "Las mejores ofertas de videojuegos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-neutral-950 text-white">
                {children}
            </body>
        </html>
    );
}
