import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 relative overflow-hidden">

            {/* Glow verde superior */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.15),transparent_60%)] pointer-events-none"></div>

            {/* HERO */}
            <section className="relative max-w-4xl text-center mt-32 space-y-8">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                    Encuentra el{" "}
                    <span className="text-green-500">mejor precio</span>
                    <br />
                    para tus videojuegos
                </h1>



                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
                    Comparamos precios automáticamente para que siempre compres al mínimo.
                    Sin perder tiempo. Sin pagar de más.
                </p>


                <br />

                <Link
                    href="/ofertas-pc-semana"
                    className="inline-block px-10 py-5 bg-green-500 hover:bg-green-400 text-black font-bold rounded-2xl text-lg transition duration-200 shadow-lg shadow-green-500/30 hover:scale-105"
                >
                    🔥 Ver ofertas ahora
                </Link>
            </section>

            {/* CATEGORÍAS DESTACADAS */}
            <section className="relative mt-24 max-w-6xl w-full space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Explora las mejores ofertas
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <Link
                        href="/juegos-menos-de-5-euros"
                        className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-green-500 transition duration-200"
                    >
                        <h3 className="text-xl font-semibold mb-2 text-green-500">
                            Juegos por menos de 5€ →
                        </h3>
                        <p className="text-neutral-400">
                            Auténticos chollos actualizados diariamente.
                        </p>
                    </Link>

                    <Link
                        href="/ofertas-pc-semana"
                        className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-green-500 transition duration-200"
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            Ofertas PC de la semana →
                        </h3>
                        <p className="text-neutral-400">
                            Los descuentos más fuertes del momento.
                        </p>
                    </Link>

                    <Link
                        href="/juegos-menos-de-10-euros"
                        className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-green-500 transition duration-200"
                    >
                        <h3 className="text-xl font-semibold mb-2">
                            Juegos por menos de 10€ →
                        </h3>
                        <p className="text-neutral-400">
                            Grandes títulos a precio reducido.
                        </p>
                    </Link>

                </div>
            </section>

            <br />
            <br />
            <br />

            {/* JUEGOS DESTACADOS */}
            <section className="relative mt-28 max-w-6xl w-full space-y-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Juegos en oferta ahora mismo
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Aquí luego meterás tus cards dinámicas */}
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />
            <br />

            {/* BENEFICIOS */}
            <section className="relative mt-28 grid md:grid-cols-3 gap-8 max-w-6xl w-full">

                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-green-500 transition duration-200">
                    <h3 className="text-xl font-semibold mb-2">
                        🔄 Actualización automática
                    </h3>
                    <p className="text-neutral-400">
                        Monitorizamos precios constantemente para mostrar los descuentos más recientes.
                    </p>
                </div>

                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-green-500 transition duration-200">
                    <h3 className="text-xl font-semibold mb-2">
                        🛒 Tiendas verificadas
                    </h3>
                    <p className="text-neutral-400">
                        Solo trabajamos con tiendas fiables y reconocidas.
                    </p>
                </div>

                <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-green-500 transition duration-200">
                    <h3 className="text-xl font-semibold mb-2">
                        💸 Ahorra tiempo y dinero
                    </h3>
                    <p className="text-neutral-400">
                        Encuentra el mejor precio sin abrir 10 pestañas distintas.
                    </p>
                </div>

            </section>

            {/* CTA FINAL */}

            {/* TEXTO SEO */}
            <section className="relative mt-32 max-w-4xl text-neutral-400 space-y-6 text-sm leading-relaxed">
                <h2 className="text-2xl font-bold text-white">
                    Las mejores ofertas de videojuegos para PC
                </h2>

                <p>
                    En OfertasVideojuegos recopilamos diariamente las mejores ofertas
                    de videojuegos para PC en tiendas verificadas. Nuestro sistema
                    compara precios automáticamente para que encuentres siempre el
                    descuento más alto disponible.
                </p>

                <p>
                    Desde juegos por menos de 5€ hasta grandes rebajas en títulos AAA,
                    aquí encontrarás oportunidades actualizadas constantemente.
                </p>
            </section>
            
            <br />
            <br />
            <br />
            <br />
            <br />

            <footer className="relative text-neutral-500 text-sm mb-6">
                © {new Date().getFullYear()} OfertasVideojuegos
            </footer>
        </main>
    );
}