// app/ofertas-pc-semana/page.jsx

import DealsExplorer from "../components/DealsExplorer";

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

    return (
        <main style={{
            minHeight: "100vh",
            background: "#09090d",
            color: "white",
            fontFamily: "'Inter', system-ui, sans-serif",
            position: "relative",
            overflowX: "hidden",
        }}>

            {/* Ambient glow */}
            <div style={{
                position: "fixed", top: "-15%", left: "50%", transform: "translateX(-50%)",
                width: 700, height: 400, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0,
            }} />

            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 32px 80px", position: "relative", zIndex: 1 }}>

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
                    <ol style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
                        <li><a href="/" style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, textDecoration: "none" }}>Inicio</a></li>
                        <li style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</li>
                        <li style={{ color: "#34d399", fontSize: 13, fontWeight: 600 }}>Todas las ofertas PC</li>
                    </ol>
                </nav>

                {/* Header */}
                <header style={{ marginBottom: 48 }}>
                    <div style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "5px 14px", borderRadius: 999,
                        border: "1px solid rgba(16,185,129,0.3)",
                        background: "rgba(16,185,129,0.07)",
                        color: "#34d399", fontSize: 11, fontWeight: 600,
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        marginBottom: 16,
                    }}>
                        <span style={{
                            width: 6, height: 6, borderRadius: "50%",
                            background: "#34d399", display: "inline-block",
                            animation: "pulse 2s infinite",
                        }} />
                        {deals.length} ofertas disponibles ahora
                    </div>

                    <h1 style={{
                        fontSize: "clamp(32px, 5vw, 56px)",
                        fontWeight: 900,
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        margin: "0 0 16px",
                    }}>
                        Todas las{" "}
                        <span style={{ color: "#34d399", textShadow: "0 0 40px rgba(16,185,129,0.3)" }}>
                            ofertas de PC
                        </span>
                    </h1>

                    <p style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: 16,
                        lineHeight: 1.7,
                        maxWidth: 580,
                        margin: 0,
                    }}>
                        Filtra por precio, descuento o puntuación Metacritic para encontrar
                        exactamente lo que buscas. Actualizamos automáticamente desde Steam
                        y más de 15 tiendas verificadas.
                    </p>

                    <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
                        {[
                            { value: `${deals.length}`, label: "juegos en oferta" },
                            { value: "Hoy", label: "última actualización" },
                            { value: "15+", label: "tiendas comparadas" },
                        ].map(({ value, label }) => (
                            <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                                <span style={{ color: "#34d399", fontWeight: 900, fontSize: 18 }}>{value}</span>
                                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </header>

                {/* Client component con filtros + paginación */}
                <DealsExplorer deals={deals} />

                {/* SEO / FAQ */}
                <section
                    aria-label="Preguntas frecuentes sobre ofertas de juegos PC"
                    style={{
                        marginTop: 80,
                        paddingTop: 48,
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        maxWidth: 760,
                    }}
                >
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "FAQPage",
                            "mainEntity": [
                                {
                                    "@type": "Question",
                                    "name": "¿Cómo funcionan las ofertas semanales de juegos PC?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Las tiendas digitales como Steam, Fanatical o Humble Store publican descuentos temporales cada semana. En OfertasVideojuegos monitorizamos estos precios automáticamente y te mostramos siempre el mejor precio disponible.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    "name": "¿Con qué frecuencia se actualizan los precios?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Los precios se actualizan automáticamente varias veces al día para reflejar cambios en descuentos, promociones flash o nuevas campañas semanales.",
                                    },
                                },
                                {
                                    "@type": "Question",
                                    "name": "¿Cuáles son las mejores épocas para comprar juegos de PC baratos?",
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": "Las rebajas más grandes suelen ocurrir durante el Steam Summer Sale (junio-julio), el Steam Winter Sale (diciembre-enero), el Black Friday y el Steam Autumn Sale (noviembre).",
                                    },
                                },
                            ],
                        })}}
                    />

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        ¿Cómo funcionan las ofertas semanales de juegos para PC?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.8, marginBottom: 32, marginTop: 0 }}>
                        Las tiendas digitales como Steam, Fanatical o Humble Store publican descuentos nuevos
                        cada semana. Los descuentos pueden llegar al 90% en títulos populares. En OfertasVideojuegos
                        monitorizamos estos precios de forma automática para que siempre veas el mejor precio
                        disponible sin tener que revisar cada tienda manualmente.
                    </p>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        ¿Cuáles son las mejores épocas para comprar juegos de PC baratos?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.8, marginBottom: 32, marginTop: 0 }}>
                        Las rebajas más grandes del año suelen ocurrir durante el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Steam Summer Sale</strong> (junio-julio),
                        el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Steam Winter Sale</strong> (diciembre-enero),
                        el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Black Friday</strong> (noviembre) y
                        el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Steam Autumn Sale</strong>. Fuera de estas fechas,
                        muchas tiendas mantienen ofertas semanales con descuentos de hasta el 90%.
                    </p>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        Consejos para sacar el máximo partido a las ofertas
                    </h2>
                    <ul style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 2, paddingLeft: 20, marginBottom: 0, marginTop: 0 }}>
                        <li>Filtra por puntuación Metacritic para encontrar calidad garantizada al mejor precio.</li>
                        <li>Usa el filtro de descuento para ver solo los chollos más agresivos.</li>
                        <li>Revisa esta página al inicio de la semana — los mejores descuentos aparecen los lunes.</li>
                        <li>Añade esta página a favoritos para no perderte ninguna oferta flash.</li>
                    </ul>
                </section>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.35; }
                }
            `}</style>
        </main>
    );
}