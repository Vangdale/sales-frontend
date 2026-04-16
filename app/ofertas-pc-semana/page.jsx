import OfertasPCSemanaContent from "../components/OfertasPCSemanaContent";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const PAGE_URL = "https://juegosbaratospc.com/ofertas-pc-semana";

export const metadata = {
    title: "Todas las ofertas de juegos PC | Filtra por precio, descuento y valoración",
    description:
        "Explora cientos de ofertas de juegos para PC filtradas por precio, porcentaje de descuento y puntuación Metacritic. Precios actualizados automáticamente desde Steam y tiendas verificadas.",
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: "Todas las ofertas de juegos PC | Filtra por precio, descuento y valoración",
        description: "Explora cientos de ofertas de juegos para PC filtradas por precio, porcentaje de descuento y puntuación Metacritic. Precios actualizados automáticamente desde Steam y tiendas verificadas.",
        url: PAGE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
        images: [{ url: "https://juegosbaratospc.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Todas las ofertas de juegos PC | Filtra por precio, descuento y valoración",
        description: "Explora cientos de ofertas de juegos para PC filtradas por precio, porcentaje de descuento y puntuación Metacritic.",
        images: ["https://juegosbaratospc.com/og-image.png"],
    },
};

export default async function OfertasPCSemana() {
    const deals = await getDeals();
    return <OfertasPCSemanaContent deals={deals} />;
}
