import JuegosMenos5Content from "../components/JuegosMenos5Content";

async function getDeals() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/deals?maxPrice=5`,
        { next: { revalidate: 60 } }
    );
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

export const metadata = {
    title: "Juegos PC por menos de 5€ | Mejores ofertas y chollos Steam hoy",
    description:
        "Encuentra los mejores juegos de PC por menos de 5€ con descuentos de hasta el 95%. Ofertas actualizadas automáticamente desde Steam y tiendas verificadas.",
};

export default async function JuegosBaratos() {
    const deals = await getDeals();
    return <JuegosMenos5Content deals={deals} />;
}
