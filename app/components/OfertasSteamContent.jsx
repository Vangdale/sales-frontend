"use client";

import DealsExplorer from "./DealsExplorer";
import { useLang } from "./LanguageProvider";

export default function OfertasSteamContent({ deals }) {
    const { t } = useLang();
    const p = t.steamDeals;
    const c = t.common;
    const strong = { color: "rgba(255,255,255,0.6)" };

    return (
        <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://juegosbaratospc.com" },
                { "@type": "ListItem", "position": 2, "name": "Ofertas PC esta semana", "item": "https://juegosbaratospc.com/ofertas-steam" },
            ],
        })}} />
        <main style={{
            minHeight: "100vh", background: "#09090d", color: "white",
            fontFamily: "'Inter', system-ui, sans-serif",
            position: "relative", overflowX: "hidden",
        }}>
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
                        <li><a href="/" style={{ color: "rgba(255,255,255,0.35)", fontSize: 13, textDecoration: "none" }}>{c.home}</a></li>
                        <li style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>›</li>
                        <li style={{ color: "#34d399", fontSize: 13, fontWeight: 600 }}>{p.breadcrumb}</li>
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
                        letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16,
                    }}>
                        <span style={{
                            width: 6, height: 6, borderRadius: "50%",
                            background: "#34d399", display: "inline-block",
                            animation: "pulse 2s infinite",
                        }} />
                        {deals.length} {c.activeDeals}
                    </div>

                    <h1 style={{
                        fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900,
                        lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 16px",
                    }}>
                        {p.h1a}{" "}
                        <span style={{ color: "#34d399", textShadow: "0 0 40px rgba(16,185,129,0.3)" }}>
                            {p.h1b}
                        </span>
                    </h1>

                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, lineHeight: 1.7, maxWidth: 580, margin: 0 }}>
                        {p.subtitle}
                    </p>

                    <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
                        {[
                            { value: `${deals.length}`, label: c.gamesOnSale },
                            { value: c.thisWeek, label: c.lastUpdate },
                        ].map(({ value, label }) => (
                            <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                                <span style={{ color: "#34d399", fontWeight: 900, fontSize: 18 }}>{value}</span>
                                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </header>

                <DealsExplorer deals={deals} />

                {/* FAQ */}
                <section aria-label="FAQ" style={{
                    marginTop: 80, paddingTop: 48,
                    borderTop: "1px solid rgba(255,255,255,0.06)", maxWidth: 760,
                }}>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        {p.faq1title}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.8, marginBottom: 32, marginTop: 0 }}>
                        {p.faq1body}
                    </p>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        {p.faq2title}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.8, marginBottom: 32, marginTop: 0 }}>
                        {p.faq2pre} <strong style={strong}>Steam Summer Sale</strong> {p.faq2mid1}{" "}
                        <strong style={strong}>Steam Winter Sale</strong> {p.faq2mid2}{" "}
                        <strong style={strong}>Black Friday</strong> {p.faq2mid3}{" "}
                        <strong style={strong}>Steam Autumn Sale</strong>. {p.faq2post}
                    </p>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        {p.faq3title}
                    </h2>
                    <ul style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 2, paddingLeft: 20, marginBottom: 32, marginTop: 0 }}>
                        {p.tips.map((tip, i) => <li key={i}>{tip}</li>)}
                    </ul>

                    <h2 style={{ fontSize: 22, fontWeight: 800, color: "rgba(255,255,255,0.85)", marginBottom: 12, marginTop: 0, letterSpacing: "-0.01em" }}>
                        {p.faq4title}
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 14, lineHeight: 1.8, marginTop: 0, marginBottom: 0 }}>
                        {p.faq4body}
                    </p>
                </section>
            </div>

            <style>{`
                @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.35; } }
            `}</style>
        </main>
        </>
    );
}
