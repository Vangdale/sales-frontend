"use client";

import Link from "next/link";
import MetacriticCarousel from "./MetacriticCarousel";
import { useLang } from "./LanguageProvider";
import '../css/embla.css';

const OPTIONS = { dragFree: true, loop: true };

export default function HomeContent({ data }) {
    const { t } = useLang();
    const h = t.home;
    const c = t.common;

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

            <div style={{
                position: "fixed", top: "-20%", left: "50%", transform: "translateX(-50%)",
                width: 800, height: 500, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16,185,129,0.13) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0,
            }} />
            <div style={{
                position: "fixed", bottom: "20%", left: "-10%",
                width: 400, height: 400, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
                pointerEvents: "none", zIndex: 0,
            }} />

            {/* ── HERO ── */}
            <section style={{
                position: "relative", zIndex: 1, width: "100%", maxWidth: 900,
                padding: "120px 32px 80px", textAlign: "center",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 24,
            }}>
                <div style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "6px 16px", borderRadius: 999,
                    border: "1px solid rgba(16,185,129,0.3)",
                    background: "rgba(16,185,129,0.07)",
                    color: "#34d399", fontSize: 11, fontWeight: 600,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                }}>
                    <span style={{
                        width: 6, height: 6, borderRadius: "50%",
                        background: "#34d399", display: "inline-block",
                        animation: "pulse 2s infinite",
                    }} />
                    {h.badge}
                </div>

                <h1 style={{
                    fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 900,
                    lineHeight: 1.05, letterSpacing: "-0.02em", margin: 0,
                }}>
                    {h.h1a}{" "}
                    <span style={{ color: "#34d399", textShadow: "0 0 40px rgba(16,185,129,0.35)" }}>
                        {h.h1b}
                    </span>
                    <br />
                    {h.h1c}
                </h1>

                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.7, maxWidth: 440, margin: 0 }}>
                    {h.subtitle}
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
                    <Link href="/ofertas-pc-semana" style={{
                        padding: "14px 28px", background: "#10b981", color: "#000",
                        fontWeight: 900, fontSize: 15, borderRadius: 12, textDecoration: "none",
                        boxShadow: "0 8px 32px rgba(16,185,129,0.3)", letterSpacing: "0.01em",
                    }}>
                        {h.ctaPrimary}
                    </Link>
                    <Link href="/juegos-gratis-pc" style={{
                        padding: "14px 24px", background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.65)", fontWeight: 600, fontSize: 15,
                        borderRadius: 12, textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.09)",
                    }}>
                        {h.ctaSecondary}
                    </Link>
                </div>

                <div style={{
                    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", width: "100%",
                    maxWidth: 480, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12,
                    background: "rgba(255,255,255,0.02)", overflow: "hidden", marginTop: 8,
                }}>
                    {[
                        { value: "1.000+", label: h.stat1label },
                        { value: "15+", label: h.stat2label },
                        { value: h.stat3value, label: h.stat3label },
                    ].map(({ value, label }, i) => (
                        <div key={label} style={{
                            padding: "14px 12px", textAlign: "center",
                            borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none",
                        }}>
                            <div style={{ color: "#34d399", fontWeight: 900, fontSize: 17 }}>{value}</div>
                            <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, marginTop: 4, lineHeight: 1.3 }}>{label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CATEGORÍAS ── */}
            <section style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1100, padding: "20px 32px 40px" }}>
                <p style={{ textAlign: "center", color: "#10b981", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    {h.categoriesLabel}
                </p>
                <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 28, marginTop: 0 }}>
                    {h.categoriesTitle}
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                    {[
                        { href: "/juegos-gratis-pc", icon: "🎁", title: h.cat1title, desc: h.cat1desc, accent: true },
                        { href: "/ofertas-pc-semana", icon: "🔥", title: h.cat2title, desc: h.cat2desc, accent: false },
                        { href: "/ofertas-steam", icon: "🎮", title: h.cat3title, desc: h.cat3desc, accent: false },
                    ].map(({ href, icon, title, desc, accent }) => (
                        <Link key={href} href={href} style={{
                            display: "flex", flexDirection: "column", gap: 12,
                            padding: "22px 20px", borderRadius: 14,
                            border: accent ? "1px solid rgba(16,185,129,0.25)" : "1px solid rgba(255,255,255,0.07)",
                            background: accent ? "rgba(16,185,129,0.07)" : "rgba(255,255,255,0.025)",
                            textDecoration: "none",
                        }}>
                            <span style={{ fontSize: 24 }}>{icon}</span>
                            <div>
                                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: accent ? "#34d399" : "rgba(255,255,255,0.8)" }}>
                                    {title}
                                </div>
                                <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, lineHeight: 1.5 }}>{desc}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ── CAROUSEL ── */}
            <section style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1100, padding: "20px 32px 40px" }}>
                <p style={{ textAlign: "center", color: "#10b981", fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                    {h.nowOnSale}
                </p>
                <h2 style={{ textAlign: "center", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 32, marginTop: 0 }}>
                    {h.bestPCGames}
                </h2>
                <MetacriticCarousel games={data} options={OPTIONS} />
            </section>

            {/* ── BENEFICIOS ── */}
            <section style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: 1100, padding: "20px 32px 60px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
                    {[
                        { icon: "🔄", title: h.ben1title, desc: h.ben1desc },
                        { icon: "🛒", title: h.ben2title, desc: h.ben2desc },
                        { icon: "💸", title: h.ben3title, desc: h.ben3desc },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} style={{
                            padding: "22px 20px", borderRadius: 14,
                            border: "1px solid rgba(255,255,255,0.06)",
                            background: "rgba(255,255,255,0.02)",
                            display: "flex", flexDirection: "column", gap: 10,
                        }}>
                            <span style={{ fontSize: 24 }}>{icon}</span>
                            <div style={{ fontWeight: 700, fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{title}</div>
                            <div style={{ color: "rgba(255,255,255,0.33)", fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── SEO ── */}
            <section style={{
                position: "relative", zIndex: 1, width: "100%", maxWidth: 760,
                padding: "40px 32px 60px", borderTop: "1px solid rgba(255,255,255,0.05)",
            }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.65)", marginBottom: 16, marginTop: 0 }}>
                    {h.seoTitle}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, lineHeight: 1.8, margin: "0 0 12px" }}>
                    {h.seoP1}
                </p>
                <p style={{ color: "rgba(255,255,255,0.28)", fontSize: 13, lineHeight: 1.8, margin: 0 }}>
                    {h.seoP2}
                </p>
            </section>

            {/* ── FOOTER ── */}
            <footer style={{
                position: "relative", zIndex: 1, width: "100%",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "24px 32px", textAlign: "center",
                color: "rgba(255,255,255,0.18)", fontSize: 12, letterSpacing: "0.03em",
            }}>
                © {new Date().getFullYear()} OfertasVideojuegos
            </footer>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.35; }
                }
            `}</style>
        </main>
    );
}
