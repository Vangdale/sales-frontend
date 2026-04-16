"use client";

import { useLang } from "./LanguageProvider";

export default function LanguageSwitcher() {
    const { lang, setLang } = useLang();

    return (
        <div style={{
            position: "fixed",
            top: 16,
            right: 20,
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            gap: 2,
            background: "rgba(9,9,13,0.85)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            padding: "4px 6px",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
        }}>
            {["es", "en"].map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                        padding: "4px 10px",
                        borderRadius: 7,
                        fontSize: 12,
                        fontWeight: 700,
                        cursor: "pointer",
                        border: "none",
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        background: lang === l ? "rgba(16,185,129,0.18)" : "transparent",
                        color: lang === l ? "#34d399" : "rgba(255,255,255,0.35)",
                        transition: "all 0.2s",
                    }}
                >
                    {l === "es" ? "🇪🇸 ES" : "🇬🇧 EN"}
                </button>
            ))}
        </div>
    );
}
