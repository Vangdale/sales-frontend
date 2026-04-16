import HomeContent from "./components/HomeContent";

async function getHomeData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const BASE_URL = "https://juegosbaratospc.com";

export const metadata = {
    title: "Ofertas de Videojuegos | Compara precios en Steam y 15+ tiendas",
    description: "Encuentra las mejores ofertas de videojuegos para PC. Compara precios automáticamente en Steam y más de 15 tiendas verificadas.",
    alternates: { canonical: BASE_URL },
    openGraph: {
        title: "Ofertas de Videojuegos | Compara precios en Steam y 15+ tiendas",
        description: "Encuentra las mejores ofertas de videojuegos para PC. Compara precios automáticamente en Steam y más de 15 tiendas verificadas.",
        url: BASE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ofertas de Videojuegos | Compara precios en Steam y 15+ tiendas",
        description: "Encuentra las mejores ofertas de videojuegos para PC. Compara precios automáticamente en Steam y más de 15 tiendas verificadas.",
    },
};

export default async function Home() {
    const data = await getHomeData();
    return <HomeContent data={data} />;
}
