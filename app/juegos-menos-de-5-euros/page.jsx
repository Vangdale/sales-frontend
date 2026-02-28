import DealCard from "../components/DealCard";

async function getDeals() {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/deals?maxPrice=5`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) {
        throw new Error("Error fetching deals");
    }

    return res.json();
}

export const metadata = {
    title: "Juegos por menos de 5€ en PC | Ofertas Steam",
    description:
        "Descubre los mejores juegos de PC por menos de 5€. Actualizamos precios automáticamente para mostrarte los mayores descuentos.",
};

export default async function JuegosBaratos() {
    const deals = await getDeals();

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">
                    Juegos por menos de 5€
                </h1>

                <p className="text-neutral-400 mb-10 max-w-3xl">
                    Estas son las mejores ofertas actuales en Steam por menos de 5€.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal) => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                </div>
            </div>
        </main>
    );
}