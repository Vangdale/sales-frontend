import HomeContent from "./components/HomeContent";

async function getHomeData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

export const metadata = {
    title: "Ofertas de Videojuegos | Compara precios en Steam y 15+ tiendas",
    description: "Encuentra las mejores ofertas de videojuegos para PC. Compara precios automáticamente en Steam y más de 15 tiendas verificadas.",
};

export default async function Home() {
    const data = await getHomeData();
    return <HomeContent data={data} />;
}
