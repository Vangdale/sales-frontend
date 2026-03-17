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
    title: "Juegos por menos de 5€ en PC | Ofertas Steam baratas",
    description:
        "Descubre los mejores juegos de PC por menos de 5€. Ofertas actualizadas automáticamente con descuentos en Steam y tiendas oficiales.",
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
                    Estas son las mejores ofertas actuales en juegos de PC por menos de 5€.
                    Comparamos precios automáticamente para que puedas encontrar descuentos
                    reales sin tener que revisar varias tiendas.
                </p>

                {/* GRID DE OFERTAS */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 auto-rows-fr">
                    {deals.map((deal) => (
                        <DealCard key={deal.game_id} deal={deal} />
                    ))}
                </div>

                {/* BLOQUE SEO */}
                <section className="mt-16 max-w-4xl mx-auto text-neutral-300 space-y-6">

                    <h2 className="text-2xl font-semibold text-white">
                        ¿Se pueden encontrar buenos juegos por menos de 5€?
                    </h2>

                    <p>
                        Sí. Las tiendas digitales suelen lanzar promociones frecuentes
                        donde muchos juegos populares bajan de precio de forma temporal.
                        Durante eventos como rebajas de temporada o promociones semanales
                        es común encontrar títulos muy conocidos por menos de cinco euros.
                    </p>

                    <p>
                        Estas ofertas suelen aparecer en tiendas oficiales y plataformas
                        digitales que distribuyen claves o licencias de juegos para PC.
                        Comparar precios entre varias tiendas puede ayudarte a encontrar
                        descuentos mucho mayores que los que verías en una sola plataforma.
                    </p>

                    <h2 className="text-2xl font-semibold text-white">
                        Ventajas de comprar juegos baratos
                    </h2>

                    <ul className="list-disc pl-6 space-y-2">
                        <li>Probar juegos nuevos sin gastar mucho dinero.</li>
                        <li>Ampliar tu biblioteca de Steam con grandes descuentos.</li>
                        <li>Descubrir títulos indie o clásicos rebajados.</li>
                        <li>Aprovechar ofertas temporales antes de que desaparezcan.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white">
                        ¿Cada cuánto se actualizan estas ofertas?
                    </h2>

                    <p>
                        Los precios se actualizan automáticamente varias veces al día.
                        De esta manera siempre puedes ver descuentos recientes y evitar
                        pagar más de lo necesario por un juego.
                    </p>

                </section>

            </div>
        </main>
    );
}