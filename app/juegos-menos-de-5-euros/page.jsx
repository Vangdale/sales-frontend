import JuegosMenos5Content from "../components/JuegosMenos5Content";

async function getDeals() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/deals?maxPrice=5`,
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const PAGE_URL = "https://juegosbaratospc.com/juegos-menos-de-5-euros";

export const metadata = {
    title: "Juegos PC por menos de 5€ | Mejores ofertas y chollos Steam hoy",
    description:
        "Encuentra los mejores juegos de PC por menos de 5€ con descuentos de hasta el 95%. Ofertas actualizadas automáticamente desde Steam y tiendas verificadas.",
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: "Juegos PC por menos de 5€ | Mejores ofertas y chollos Steam hoy",
        description: "Encuentra los mejores juegos de PC por menos de 5€ con descuentos de hasta el 95%. Ofertas actualizadas automáticamente desde Steam y tiendas verificadas.",
        url: PAGE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
        images: [{ url: "https://juegosbaratospc.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Juegos PC por menos de 5€ | Mejores ofertas y chollos Steam hoy",
        description: "Encuentra los mejores juegos de PC por menos de 5€ con descuentos de hasta el 95%.",
        images: ["https://juegosbaratospc.com/og-image.png"],
    },
};

export default async function JuegosBaratos() {
    const deals = await getDeals();
    return <JuegosMenos5Content deals={deals} />;
}
