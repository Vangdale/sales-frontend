"use client";

import { useLang } from "./LanguageProvider";

// ── Mapa completo de tiendas CheapShark ──────────────────────────────────────
// Fuente: https://www.cheapshark.com/api/1.0/stores
// Actualizado: 2025. Para refrescar: fetch('https://www.cheapshark.com/api/1.0/stores')
const STORE_MAP = {
    "1":  "Steam",
    "2":  "GamersGate",
    "3":  "GreenManGaming",
    "4":  "Amazon",
    "5":  "GameStop",
    "6":  "Direct2Drive",
    "7":  "GOG",
    "8":  "Origin",          // ahora EA App
    "9":  "Get Games",
    "10": "Shiny Loot",
    "11": "Humble Store",
    "12": "Desura",
    "13": "Uplay",           // ahora Ubisoft Connect
    "14": "IndieGameStand",
    "15": "Fanatical",       // antes Bundle Stars
    "16": "Gamer's Gate",
    "17": "WinGameStore",
    "18": "FunStock",
    "19": "GameBillet",
    "20": "Voidu",
    "21": "Epic Games Store",
    "22": "Razer Game Store",
    "23": "Gamesplanet",
    "24": "Gamesload",
    "25": "2Game",
    "26": "IndieGala",
    "27": "Gamesplanet",
    "28": "AllYouPlay",
    "29": "DLGamer",
    "30": "Noctre",
    "31": "DreamGame",
    "32": "Magnetic Pool",   // puede estar inactivo
    "33": "WinGameStore",
    "34": "Playfield",
    "35": "ImperialGames",
    "36": "Allyouplay",
};

export default function DealCard({ deal }) {
    const { t } = useLang();
    const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? process.env.NEXT_TEST_API_URL ?? "";

    const discount =
        deal.discountPercent ??
        (deal.original_price && deal.price
            ? Math.round((1 - deal.price / deal.original_price) * 100)
            : null);

    const score = deal.metacriticScore && deal.metacriticScore > 0 ? deal.metacriticScore : null;

    // Nombre de la tienda — acepta store_id (deals API) o storeID (home API)
    const storeId = deal.store_id ?? deal.storeID ?? null;
    const storeName = storeId
        ? (STORE_MAP[String(storeId)] ?? `Tienda ${storeId}`)
        : null;

    const scoreColor =
        score >= 85
            ? { text: "#34d399", ring: "rgba(16,185,129,0.4)", bg: "rgba(16,185,129,0.1)" }
            : score >= 70
            ? { text: "#fbbf24", ring: "rgba(251,191,36,0.4)", bg: "rgba(251,191,36,0.1)" }
            : { text: "#f87171", ring: "rgba(248,113,113,0.4)", bg: "rgba(248,113,113,0.1)" };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                background: "#0f0f13",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.07)",
                overflow: "hidden",
                transition: "border-color 0.4s, transform 0.3s, box-shadow 0.4s",
                height: "100%",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(16,185,129,0.4)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(16,185,129,0.12)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
            }}
        >
            {/* ── Imagen 16:9 ── */}
            <div style={{
                position: "relative",
                width: "100%",
                aspectRatio: "16/9",
                overflow: "hidden",
                background: "#000",
                flexShrink: 0,
            }}>
                <img
                    src={deal.imageUrl}
                    alt={deal.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, #0f0f13 0%, rgba(15,15,19,0.1) 45%, transparent 100%)"
                }} />

                {/* Badge descuento */}
                {discount > 0 && (
                    <div style={{
                        position: "absolute", top: 10, left: 10,
                        padding: "3px 8px", borderRadius: 6,
                        background: "#dc2626", color: "#fff",
                        fontSize: 11, fontWeight: 900, letterSpacing: "0.05em",
                        boxShadow: "0 2px 12px rgba(220,38,38,0.4)",
                    }}>
                        -{discount}%
                    </div>
                )}

                {/* Badge Metacritic */}
                {score && (
                    <div style={{
                        position: "absolute", top: 10, right: 10,
                        display: "flex", alignItems: "center", gap: 5,
                        padding: "5px 9px", borderRadius: 8,
                        background: scoreColor.bg,
                        border: `1px solid ${scoreColor.ring}`,
                        backdropFilter: "blur(8px)",
                    }}>
                        <img src="/Metacritic_M.png" alt="Metacritic" style={{ width: 14, height: 14 }} />
                        <span style={{
                            color: scoreColor.text, fontSize: 13, fontWeight: 900,
                            textShadow: "1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000",
                        }}>
                            {score}
                        </span>
                    </div>
                )}
            </div>

            {/* ── Body ── */}
            <div style={{ padding: "14px 14px 16px", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>

                {/* Título */}
                <h2 style={{
                    fontSize: 13, fontWeight: 700, lineHeight: 1.4,
                    color: "rgba(255,255,255,0.88)",
                    margin: 0,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}>
                    {deal.title}
                </h2>

                {/* ── Nombre de la tienda ── */}
                {storeName && (
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                        {/* Punto decorativo */}
                        <span style={{
                            width: 4, height: 4, borderRadius: "50%",
                            background: "rgba(255,255,255,0.2)",
                            flexShrink: 0,
                            display: "inline-block",
                        }} />
                        <span style={{
                            fontSize: 11,
                            color: "rgba(255,255,255,0.28)",
                            fontWeight: 500,
                            letterSpacing: "0.02em",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}>
                            {storeName}
                        </span>
                    </div>
                )}

                {/* Precios */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginTop: "auto" }}>
                    {deal.original_price && (
                        <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, textDecoration: "line-through" }}>
                            {deal.original_price}€
                        </span>
                    )}
                    <span style={{ color: "#34d399", fontSize: 22, fontWeight: 900, letterSpacing: "-0.02em" }}>
                        {deal.price}€
                    </span>
                </div>

                {/* Botón CTA */}
                <a
                    href={`${API_BASE}/r/${deal.redirect_slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: "block",
                        textAlign: "center",
                        padding: "10px",
                        borderRadius: 10,
                        background: "#10b981",
                        color: "#000",
                        fontSize: 12,
                        fontWeight: 900,
                        textDecoration: "none",
                        letterSpacing: "0.02em",
                        transition: "background 0.2s",
                        marginTop: 4,
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = "#34d399"}
                    onMouseLeave={e => e.currentTarget.style.background = "#10b981"}
                >
                    {t.common.buyNow}
                </a>
            </div>
        </div>
    );
}