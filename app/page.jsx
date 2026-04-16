import HomeContent from "./components/HomeContent";

async function getHomeData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const BASE_URL = "https://juegosbaratospc.com";
const OG_TITLE = "Mejores ofertas de videojuegos | Steam y 15+ tiendas";
const OG_DESC = "Encuentra las mejores ofertas de videojuegos para PC. Compara precios automáticamente en Steam y más de 15 tiendas verificadas.";

export const metadata = {
    title: OG_TITLE,
    description: OG_DESC,
    alternates: { canonical: BASE_URL },
    openGraph: {
        title: OG_TITLE,
        description: OG_DESC,
        url: BASE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
        images: [{ url: "https://juegosbaratospc.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: OG_TITLE,
        description: OG_DESC,
        images: ["https://juegosbaratospc.com/og-image.png"],
    },
};

export default async function Home() {
    const data = await getHomeData();
    return <HomeContent data={data} />;
}
