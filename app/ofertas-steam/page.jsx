import OfertasSteamContent from "../components/OfertasSteamContent";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals?store=1`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const PAGE_URL = "https://juegosbaratospc.com/ofertas-steam";

export const metadata = {
    title: "Ofertas PC esta semana | Mejores descuentos en juegos ahora mismo",
    description:
        "Las mejores ofertas de juegos para PC actualizadas esta semana. Descuentos de hasta el 90% en Steam y tiendas verificadas. Compara precios automáticamente.",
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: "Ofertas PC esta semana | Mejores descuentos en juegos ahora mismo",
        description: "Las mejores ofertas de juegos para PC actualizadas esta semana. Descuentos de hasta el 90% en Steam y tiendas verificadas. Compara precios automáticamente.",
        url: PAGE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
        images: [{ url: "https://juegosbaratospc.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ofertas PC esta semana | Mejores descuentos en juegos ahora mismo",
        description: "Las mejores ofertas de juegos para PC actualizadas esta semana. Descuentos de hasta el 90% en Steam y tiendas verificadas.",
        images: ["https://juegosbaratospc.com/og-image.png"],
    },
};

export default async function OfertasSteam() {
    const deals = await getDeals();
    return <OfertasSteamContent deals={deals} />;
}
