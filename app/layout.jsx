import "./globals.css"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "./components/LanguageProvider"
import LanguageSwitcher from "./components/LanguageSwitcher"

export const metadata = {
    metadataBase: new URL("https://juegosbaratospc.com"),
    title: "Ofertas de Videojuegos",
    description: "Las mejores ofertas de videojuegos",
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <meta name='impact-site-verification' value='712ab413-5b36-4af2-86a4-ecd72893707f'></meta>
            </head>
            <body className="bg-[#09090d]">
                <LanguageProvider>
                    <LanguageSwitcher />
                    {children}
                </LanguageProvider>
                <Analytics />
            </body>
        </html>
    );
}
