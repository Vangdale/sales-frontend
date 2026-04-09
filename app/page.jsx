import Link from "next/link";
import MetacriticCarousel from "./components/MetacriticCarousel";
import './css/embla.css'

const OPTIONS = { dragFree: true, loop: true }

async function getHomeData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

export default async function Home() {
    const data = await getHomeData();

    return (
        <main style={{
            minHeight: "100vh",
            background: "#09090d",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            overflowX: "hidden",
            fontFamily: "'Inter', system-ui, sans-serif",
        }}>

            {/* ── Ambient glow top ── */}
            <div style={{
                position: "fixed",
                top: "-20%",
                left: "50%",
                transform: "translateX(-50%)",
                width: 800,
                height: 500,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16,185,129,0.13) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0,
            }} />
            {/* ── Ambient glow bottom-left ── */}
            <div style={{
                position: "fixed",
                bottom: "20%",
                left: "-10%",
                width: 400,
                height: 400,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
                pointerEvents: "none",
                zIndex: 0,
            }} />

            {/* ════════════════════ HERO ════════════════════ */}
            <section style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 900,
                padding: "120px 32px 80px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 24,
            }}>

                {/* Eyebrow badge */}
                <div style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 16px",
                    borderRadius: 999,
                    border: "1px solid rgba(16,185,129,0.3)",
                    background: "rgba(16,185,129,0.07)",
                    color: "#34d399",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                }}>
                    <span style={{
                        width: 6, height: 6,
                        borderRadius: "50%",
                        background: "#34d399",
                        display: "inline-block",
                        animation: "pulse 2s infinite",
                    }} />
                    Actualizado hoy
                </div>

                {/* H1 */}
                <h1 style={{
                    fontSize: "clamp(38px, 6vw, 68px)",
                    fontWeight: 900,
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    margin: 0,
                }}>
                    Encuentra el{" "}
                    <span style={{
                        color: "#34d399",
                        textShadow: "0 0 40px rgba(16,185,129,0.35)",
                    }}>
                        mejor precio
                    </span>
                    <br />
                    para tus videojuegos
                </h1>

                {/* Subtitle */}
                <p style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 16,
                    lineHeight: 1.7,
                    maxWidth: 440,
                    margin: 0,
                }}>
                    Comparamos precios automáticamente para que siempre compres al mínimo.
                    Sin perder tiempo. Sin pagar de más.
                </p>

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
                    <Link href="/ofertas-pc-semana" style={{
                        padding: "14px 28px",
                        background: "#10b981",
                        color: "#000",
                        fontWeight: 900,
                        fontSize: 15,
                        borderRadius: 12,
                        textDecoration: "none",
                        boxShadow: "0 8px 32px rgba(16,185,129,0.3)",
                        transition: "background 0.2s",
                        letterSpacing: "0.01em",
                    }}>
                        🔥 Ver ofertas ahora
                    </Link>
                    <Link href="/juegos-menos-de-5-euros" style={{
                        padding: "14px 24px",
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.65)",
                        fontWeight: 600,
                        fontSize: 15,
                        borderRadius: 12,
                        textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.09)",
                        transition: "background 0.2s",
                    }}>
                        Juegos por menos de 5€ →
                    </Link>
                </div>

                {/* Stats bar */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    width: "100%",
                    maxWidth: 480,
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.02)",
                    overflow: "hidden",
                    marginTop: 8,
                }}>
                    {[
                        { value: "1.000+", label: "Juegos monitorizados" },
                        { value: "15+", label: "Tiendas verificadas" },
                        { value: "Diario", label: "Actualización de precios" },
                    ].map(({ value, label }, i) => (
                        <div key={label} style={{
                            padding: "14px 12px",
                            textAlign: "center",
                            borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                        }}>
                            <div style={{ color: "#34d399", fontWeight: 900, fontSize: 17 }}>{value}</div>
                            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 4, lineHeight: 1.3 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════ CATEGORÍAS ════════════════════ */}
            <section style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 1100,
                padding: "20px 32px 40px",
            }}>
                <p style={{ textAlign: "center", color: "#10b981", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    Categorías
                </p>
                <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 28, marginTop: 0 }}>
                    Explora las mejores ofertas
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                    {[
                        { href: "/juegos-menos-de-5-euros", icon: "💰", title: "Menos de 5€ →", desc: "Auténticos chollos actualizados diariamente.", accent: true },
                        { href: "/ofertas-pc-semana", icon: "🔥", title: "Ofertas PC semana →", desc: "Los descuentos más fuertes del momento.", accent: false },
                        { href: "/ofertas-steam", icon: "🎮", title: "Ofertas Steam →", desc: "Grandes títulos a precio reducido.", accent: false },
                    ].map(({ href, icon, title, desc, accent }) => (
                        <Link key={href} href={href} style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 12,
                            padding: "22px 20px",
                            borderRadius: 14,
                            border: accent ? "1px solid rgba(16,185,129,0.25)" : "1px solid rgba(255,255,255,0.07)",
                            background: accent ? "rgba(16,185,129,0.07)" : "rgba(255,255,255,0.025)",
                            textDecoration: "none",
                            transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                        }}>
                            <span style={{ fontSize: 24 }}>{icon}</span>
                            <div>
                                <div style={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    marginBottom: 6,
                                    color: accent ? "#34d399" : "rgba(255,255,255,0.8)",
                                }}>
                                    {title}
                                </div>
                                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.5 }}>
                                    {desc}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ════════════════════ CAROUSEL ════════════════════ */}
            <section style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 1100,
                padding: "20px 32px 40px",
            }}>
                <p style={{ textAlign: "center", color: "#10b981", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    En oferta ahora
                </p>
                <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 32, marginTop: 0 }}>
                    Los mejores juegos de PC
                </h2>

                <MetacriticCarousel games={data} options={OPTIONS} />
            </section>

            {/* ════════════════════ BENEFICIOS ════════════════════ */}
            <section style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 1100,
                padding: "20px 32px 60px",
            }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                    {[
                        { icon: "🔄", title: "Actualización automática", desc: "Monitorizamos precios constantemente para mostrar los descuentos más recientes." },
                        { icon: "🛒", title: "Tiendas verificadas", desc: "Solo trabajamos con tiendas fiables y reconocidas del mercado." },
                        { icon: "💸", title: "Ahorra tiempo y dinero", desc: "Encuentra el mejor precio sin abrir 10 pestañas distintas." },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} style={{
                            padding: "22px 20px",
                            borderRadius: 14,
                            border: "1px solid rgba(255,255,255,0.06)",
                            background: "rgba(255,255,255,0.02)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 10,
                        }}>
                            <span style={{ fontSize: 24 }}>{icon}</span>
                            <div style={{ fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{title}</div>
                            <div style={{ color: "rgba(255,255,255,0.33)", fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ════════════════════ SEO ════════════════════ */}
            <section style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 760,
                padding: "40px 32px 60px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
            }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.65)", marginBottom: 16, marginTop: 0 }}>
                    Las mejores ofertas de videojuegos para PC
                </h2>
                <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, lineHeight: 1.8, marginBottom: 12, margin: "0 0 12px" }}>
                    En OfertasVideojuegos recopilamos diariamente las mejores ofertas de videojuegos para PC en
                    tiendas verificadas. Nuestro sistema compara precios automáticamente para que encuentres
                    siempre el descuento más alto disponible.
                </p>
                <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
                    Desde juegos por menos de 5€ hasta grandes rebajas en títulos AAA, aquí encontrarás
                    oportunidades actualizadas constantemente.
                </p>
            </section>

            {/* ════════════════════ FOOTER ════════════════════ */}
            <footer style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "24px 32px",
                textAlign: "center",
                color: "rgba(255,255,255,0.18)",
                fontSize: 12,
                letterSpacing: "0.03em",
            }}>
                © {new Date().getFullYear()} OfertasVideojuegos
            </footer>

            {/* Pulse animation keyframe */}
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.35; }
                }
            `}</style>
        </main>
    );
}