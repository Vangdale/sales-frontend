// app/ofertas-pc-semana/page.jsx

import DealCard from "../components/DealCard";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_TEST_API_URL}/api/deals`, {
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

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {deals.map((deal) => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                </div>

                <section className="mt-16 max-w-4xl mx-auto text-neutral-300 space-y-6">

                    <h2 className="text-2xl font-semibold text-white">
                        ¿Cómo funcionan las ofertas de juegos para PC?
                    </h2>

                    <p>
                        Las ofertas semanales de juegos para PC suelen incluir descuentos temporales
                        en plataformas oficiales como Steam, Epic Games Store o tiendas autorizadas.
                        Estos descuentos pueden variar desde pequeñas rebajas hasta promociones
                        superiores al 80%.
                    </p>

                    <p>
                        En esta página recopilamos automáticamente las mejores ofertas activas
                        y las actualizamos de forma periódica. De esta manera puedes consultar
                        rápidamente qué juegos están rebajados sin tener que revisar cada tienda manualmente.
                    </p>

                    <h2 className="text-2xl font-semibold text-white">
                        ¿Cada cuánto se actualizan los precios?
                    </h2>

                    <p>
                        Los precios se actualizan automáticamente varias veces al día para reflejar
                        cambios en descuentos, promociones flash o nuevas campañas semanales.
                    </p>

                    <h2 className="text-2xl font-semibold text-white">
                        Consejos para aprovechar mejor las ofertas
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Revisa las ofertas al inicio de la semana.</li>
                        <li>Compara el porcentaje de descuento con el precio histórico.</li>
                        <li>Prioriza juegos con reseñas positivas y gran descuento.</li>
                        <li>Guarda esta página en favoritos para consultar actualizaciones.</li>
                    </ul>

                </section>
            </div>
        </main>
    );
}