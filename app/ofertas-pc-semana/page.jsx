// app/ofertas-pc-semana/page.jsx

import DealCard from "../components/DealCard";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error("Error fetching deals");
    }

    return res.json();
}

export const metadata = {
    title: "Ofertas PC de la semana | Juegos baratos actualizados",
    description:
        "Descubre las mejores ofertas de juegos para PC esta semana. Actualizamos precios automáticamente para que siempre compres al mejor precio.",
};

export default async function OfertasPCSemana() {
    const deals = await getDeals();

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
                
                <h1 className="text-4xl font-bold mb-4">
                    Ofertas de PC esta semana
                </h1>

                <p className="text-neutral-400 mb-10 max-w-3xl">
                    Estas son las mejores ofertas de juegos para PC disponibles esta semana.
                    Comparamos precios automáticamente para mostrarte los mayores descuentos.
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