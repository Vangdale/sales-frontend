import JuegosGratisContent from "../components/JuegosGratisContent";

async function getDeals() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/deals?maxPrice=0`,
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const PAGE_URL = "https://juegosbaratospc.com/juegos-gratis-pc";

export const metadata = {
    title: "Juegos Gratis PC Hoy | 100% descuento en Steam",
    description:
        "Encuentra juegos de PC completamente gratis hoy. Descuentos del 100% actualizados automáticamente desde Steam y más de 15 tiendas verificadas.",
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: "Juegos Gratis PC Hoy | 100% descuento en Steam",
        description: "Encuentra juegos de PC completamente gratis hoy. Descuentos del 100% actualizados automáticamente desde Steam y más de 15 tiendas verificadas.",
        url: PAGE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
        images: [{ url: "https://juegosbaratospc.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Juegos Gratis PC Hoy | 100% descuento en Steam",
        description: "Encuentra juegos de PC completamente gratis hoy. 100% descuento en Steam y tiendas verificadas.",
        images: ["https://juegosbaratospc.com/og-image.png"],
    },
};

export default async function JuegosGratis() {
    const deals = await getDeals();
    return <JuegosGratisContent deals={deals} />;
}
