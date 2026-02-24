import "./globals.css"


export const metadata = {
    title: "Ofertas de Videojuegos",
    description: "Las mejores ofertas de videojuegos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-gray-100 text-gray-900">
                {children}
            </body>
        </html>
    );
}
