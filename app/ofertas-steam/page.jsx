import OfertasSteamContent from "../components/OfertasSteamContent";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals?store=1`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

export const metadata = {
    title: "Ofertas PC esta semana | Mejores descuentos en juegos ahora mismo",
    description:
        "Las mejores ofertas de juegos para PC actualizadas esta semana. Descuentos de hasta el 90% en Steam y tiendas verificadas. Compara precios automáticamente.",
};

export default async function OfertasSteam() {
    const deals = await getDeals();
    return <OfertasSteamContent deals={deals} />;
}
