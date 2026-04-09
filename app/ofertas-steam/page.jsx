// app/ofertas-pc-semana/page.jsx

import DealCard from "../components/DealCard";

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

                {/* ── Breadcrumb ── */}
                <nav aria-label="Breadcrumb" style={{ marginBottom: 32 }}>
                    <ol style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
                        <li><a href="/" style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, textDecoration: "none" }}>Inicio</a></li>
                        <li style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</li>
                        <li style={{ color: "#34d399", fontSize: 13, fontWeight: 600 }}>Ofertas PC esta semana</li>
                    </ol>
                </nav>

                {/* ── Header ── */}
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
                        {deals.length} ofertas activas ahora mismo
                    </div>

                    <h1 style={{
                        fontSize: "clamp(32px, 5vw, 56px)",
                        fontWeight: 900,
                        lineHeight: 1.05,
                        letterSpacing: "-0.02em",
                        margin: "0 0 16px",
                    }}>
                        Ofertas Steam{" "}
                        <span style={{ color: "#34d399", textShadow: "0 0 40px rgba(16,185,129,0.3)" }}>
                            esta semana
                        </span>
                    </h1>

                    <p style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: 16,
                        lineHeight: 1.7,
                        maxWidth: 580,
                        margin: 0,
                    }}>
                        Los mejores descuentos en juegos para PC actualizados automáticamente.
                        Comparamos precios en Steam y más de 15 tiendas verificadas para que
                        nunca pagues de más.
                    </p>

                    {/* Stats inline */}
                    <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
                        {[
                            { value: `${deals.length}`, label: "juegos en oferta" },
                            { value: "Esta semana", label: "última actualización" },
                            
                        ].map(({ value, label }) => (
                            <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                                <span style={{ color: "#34d399", fontWeight: 900, fontSize: 18 }}>{value}</span>
                                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </header>

                {/* ── Grid 4 columnas ── */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 16,
                }}>
                    {deals.map((deal) => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                </div>

                {/* ── SEO / FAQ ── */}
                <section
                    aria-label="Preguntas frecuentes sobre ofertas de juegos PC"
                    style={{
                        marginTop: 80,
                        paddingTop: 48,
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        maxWidth: 760,
                    }}
                >
                    {/* FAQ Schema JSON-LD */}
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
                                        "text": "Las tiendas digitales como Steam, Fanatical o Humble Store publican descuentos temporales cada semana. En OfertasVideojuegos monitorizamos estos precios automáticamente y te mostramos siempre el mejor precio disponible sin que tengas que revisar cada tienda.",
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
                                        "text": "Las rebajas más grandes suelen ocurrir durante el Steam Summer Sale (junio-julio), el Steam Winter Sale (diciembre-enero), el Black Friday y el Steam Autumn Sale (noviembre). Fuera de estas fechas, muchas tiendas ofrecen descuentos semanales de hasta el 90%.",
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
                        cada semana, a veces coincidiendo con lanzamientos o eventos especiales. Los descuentos
                        pueden llegar al 90% en títulos populares. En OfertasVideojuegos monitorizamos estos
                        precios de forma automática para que siempre veas el mejor precio disponible sin tener
                        que revisar cada tienda manualmente.
                    </p>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        ¿Cuáles son las mejores épocas para comprar juegos de PC baratos?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.8, marginBottom: 32, marginTop: 0 }}>
                        Las rebajas más grandes del año suelen ocurrir durante el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Steam Summer Sale</strong> (junio-julio),
                        el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Steam Winter Sale</strong> (diciembre-enero),
                        el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Black Friday</strong> (noviembre) y
                        el <strong style={{ color: "rgba(255,255,255,0.6)" }}>Steam Autumn Sale</strong>. Fuera de estas fechas,
                        muchas tiendas mantienen ofertas semanales con descuentos de hasta el 90% en títulos AAA e indie.
                    </p>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        Consejos para sacar el máximo partido a las ofertas
                    </h2>
                    <ul style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 2, paddingLeft: 20, marginBottom: 32, marginTop: 0 }}>
                        <li>Revisa esta página al inicio de la semana — los mejores descuentos aparecen los lunes.</li>
                        <li>Fíjate en el score de Metacritic junto al precio para elegir calidad garantizada.</li>
                        <li>Compara el descuento actual con el precio histórico antes de comprar.</li>
                        <li>Añade esta página a favoritos para no perderte ninguna oferta flash.</li>
                    </ul>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        ¿Con qué frecuencia se actualizan los precios?
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.8, marginTop: 0, marginBottom: 0 }}>
                        Los precios se actualizan automáticamente varias veces al día para reflejar cambios
                        en descuentos, promociones flash o nuevas campañas semanales. Así siempre ves
                        información real y actualizada, sin datos desfasados.
                    </p>

                </section>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.35; }
                }
                @media (max-width: 1024px) {
                    .deals-grid { grid-template-columns: repeat(3, 1fr) !important; }
                }
                @media (max-width: 640px) {
                    .deals-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>
        </main>
    );
}