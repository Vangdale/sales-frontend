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