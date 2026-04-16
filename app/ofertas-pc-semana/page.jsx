import OfertasPCSemanaContent from "../components/OfertasPCSemanaContent";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

export const metadata = {
    title: "Todas las ofertas de juegos PC | Filtra por precio, descuento y valoración",
    description:
        "Explora cientos de ofertas de juegos para PC filtradas por precio, porcentaje de descuento y puntuación Metacritic. Precios actualizados automáticamente desde Steam y tiendas verificadas.",
};

export default async function OfertasPCSemana() {
    const deals = await getDeals();
    return <OfertasPCSemanaContent deals={deals} />;
}
