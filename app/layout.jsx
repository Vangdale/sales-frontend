import "./globals.css"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: "Ofertas de Videojuegos",
    description: "Las mejores ofertas de videojuegos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-[#09090d]">
                {children}
            </body>
        </html>
    );
}
