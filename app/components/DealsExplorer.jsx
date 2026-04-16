"use client";

import { useState, useMemo, useCallback } from "react";
import DealCard from "./DealCard";
import { useLang } from "./LanguageProvider";

const DEALS_PER_PAGE = 20;

// ── Slider de precio máximo (un solo pulgar) ──
function RangeSlider({ min, max, valueMax, onChange, unit = "" }) {
    const pctMax = ((valueMax - min) / (max - min)) * 100;

    return (
        <div style={{ position: "relative", width: "100%" }}>
            {/* Track */}
            <div style={{
                position: "relative", height: 4, borderRadius: 2,
                background: "rgba(255,255,255,0.1)", margin: "12px 0",
            }}>
                {/* Fill activo desde 0 hasta el pulgar */}
                <div style={{
                    position: "absolute", height: "100%", borderRadius: 2,
                    background: "#10b981",
                    left: 0,
                    width: `${pctMax}%`,
                }} />
            </div>

            {/* Input max (único) */}
            <input
                type="range" min={min} max={max} step={1} value={valueMax}
                onChange={e => onChange(Number(e.target.value))}
                style={{
                    position: "absolute", top: 0, left: 0, width: "100%",
                    opacity: 0, height: 28, cursor: "pointer", zIndex: 2,
                }}
            />

            {/* Thumb visual */}
            <div style={{
                position: "absolute", top: -10,
                left: `calc(${pctMax}% - 8px)`,
                width: 20, height: 20, borderRadius: "50%",
                background: "#10b981", border: "2px solid #09090d",
                boxShadow: "0 0 0 2px rgba(16,185,129,0.4)",
                pointerEvents: "none", zIndex: 1,
            }} />

            {/* Labels */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
                <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, fontWeight: 700 }}>0{unit}</span>
                <span style={{ color: "#34d399", fontSize: 13, fontWeight: 700 }}>{valueMax}{unit}</span>
            </div>
        </div>
    );
}

// ── Botones de selección rápida ──
function QuickFilters({ options, value, onChange, allLabel }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <button
                onClick={() => onChange(null)}
                style={{
                    padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
                    border: value === null ? "1px solid #10b981" : "1px solid rgba(255,255,255,0.1)",
                    background: value === null ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.04)",
                    color: value === null ? "#34d399" : "rgba(255,255,255,0.5)",
                    transition: "all 0.2s",
                }}
            >
                {allLabel}
            </button>
            {options.map(opt => (
                <button
                    key={opt.value}
                    onClick={() => onChange(opt.value)}
                    style={{
                        padding: "5px 12px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
                        border: value === opt.value ? "1px solid #10b981" : "1px solid rgba(255,255,255,0.1)",
                        background: value === opt.value ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.04)",
                        color: value === opt.value ? "#34d399" : "rgba(255,255,255,0.5)",
                        transition: "all 0.2s",
                    }}
                >
                    {opt.label}
                </button>
            ))}
        </div>
    );
}

export default function DealsExplorer({ deals }) {
    const { t } = useLang();
    const f = t.filters;

    // ── Filtros ──
    const [priceMax, setPriceMax] = useState(100);
    const [minDiscount, setMinDiscount] = useState(null);
    const [minScore, setMinScore] = useState(null);
    const [sortBy, setSortBy] = useState("score"); // discount | price | score
    const [page, setPage] = useState(1);

    // Calcular descuento si no viene en el JSON
    const dealsNormalized = useMemo(() => deals.map(d => ({
        ...d,
        _discount: d.discountPercent ?? (d.original_price && d.price
            ? Math.round((1 - d.price / d.original_price) * 100)
            : 0),
        _score: d.metacriticScore ?? 0,
        _price: Number(d.price) || 0,
    })), [deals]);

    // Aplicar filtros
    const filtered = useMemo(() => {
        let result = dealsNormalized.filter(d => {
            if (d._price > priceMax) return false;
            if (minDiscount !== null && d._discount < minDiscount) return false;
            if (minScore !== null && d._score < minScore) return false;
            return true;
        });

        // Ordenar
        result = [...result].sort((a, b) => {
            if (sortBy === "discount") return b._discount - a._discount;
            if (sortBy === "price") return a._price - b._price;
            if (sortBy === "score") return b._score - a._score;
            return 0;
        });

        return result;
    }, [dealsNormalized, priceMax, minDiscount, minScore, sortBy]);

    // Paginación
    const totalPages = Math.ceil(filtered.length / DEALS_PER_PAGE);
    const paginated = filtered.slice((page - 1) * DEALS_PER_PAGE, page * DEALS_PER_PAGE);

    const resetPage = useCallback(() => setPage(1), []);

    const resetAll = () => {
        setPriceMax(100);
        setMinDiscount(null); setMinScore(null);
        setSortBy("score"); setPage(1);
    };

    const hasActiveFilters = priceMax < 100 || minDiscount !== null || minScore !== null;

    // ── Estilos reutilizables ──
    const sectionLabel = {
        fontSize: 11, fontWeight: 700, letterSpacing: "0.08em",
        textTransform: "uppercase", color: "rgba(255,255,255,0.4)",
        marginBottom: 12, display: "block",
    };

    return (
        <div>
            {/* ════ PANEL DE FILTROS ════ */}
            <div style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 28px",
                marginBottom: 28,
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                        {f.title}
                        {hasActiveFilters && (
                            <span style={{
                                marginLeft: 8, padding: "2px 8px", borderRadius: 999,
                                background: "rgba(16,185,129,0.15)", color: "#34d399",
                                fontSize: 11, fontWeight: 700,
                            }}>
                                {f.active}
                            </span>
                        )}
                    </span>
                    {hasActiveFilters && (
                        <button onClick={resetAll} style={{
                            background: "none", border: "none", color: "rgba(255,255,255,0.3)",
                            fontSize: 12, cursor: "pointer", textDecoration: "underline",
                        }}>
                            {f.clearFilters}
                        </button>
                    )}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>

                    {/* Precio */}
                    <div>
                        <span style={sectionLabel}>{f.priceRange}</span>
                        <RangeSlider
                            min={0} max={100}
                            valueMax={priceMax}
                            unit="€"
                            onChange={mx => { setPriceMax(mx); resetPage(); }}
                        />
                    </div>

                    {/* Descuento */}
                    <div>
                        <span style={sectionLabel}>{f.minDiscount}</span>
                        <QuickFilters
                            value={minDiscount}
                            onChange={v => { setMinDiscount(v); resetPage(); }}
                            allLabel={f.all}
                            options={[
                                { value: 50, label: "≥50%" },
                                { value: 70, label: "≥70%" },
                                { value: 80, label: "≥80%" },
                                { value: 90, label: "≥90%" },
                            ]}
                        />
                    </div>

                    {/* Metacritic */}
                    <div>
                        <span style={sectionLabel}>{f.metacritic}</span>
                        <QuickFilters
                            value={minScore}
                            onChange={v => { setMinScore(v); resetPage(); }}
                            allLabel={f.all}
                            options={[
                                { value: 60, label: "≥60" },
                                { value: 70, label: "≥70" },
                                { value: 80, label: "≥80" },
                                { value: 90, label: "≥90" },
                            ]}
                        />
                    </div>
                </div>

                {/* Ordenar por */}
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ ...sectionLabel, marginBottom: 0, whiteSpace: "nowrap" }}>{f.sortBy}</span>
                    {[
                        { value: "discount", label: f.highestDiscount },
                        { value: "price", label: f.lowestPrice },
                        { value: "score", label: f.bestRated },
                    ].map(opt => (
                        <button
                            key={opt.value}
                            onClick={() => { setSortBy(opt.value); resetPage(); }}
                            style={{
                                padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600, cursor: "pointer",
                                border: sortBy === opt.value ? "1px solid #10b981" : "1px solid rgba(255,255,255,0.1)",
                                background: sortBy === opt.value ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.04)",
                                color: sortBy === opt.value ? "#34d399" : "rgba(255,255,255,0.5)",
                                transition: "all 0.2s",
                            }}
                        >
                            {opt.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Resultados count */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 13 }}>
                    <span style={{ color: "#34d399", fontWeight: 700 }}>{filtered.length}</span> {f.gamesFound}
                    {totalPages > 1 && ` · ${f.page} ${page} ${f.of} ${totalPages}`}
                </span>
            </div>

            {/* ════ GRID ════ */}
            {paginated.length === 0 ? (
                <div style={{
                    textAlign: "center", padding: "80px 0",
                    color: "rgba(255,255,255,0.25)", fontSize: 15,
                }}>
                    {f.noResults}
                    <br />
                    <button onClick={resetAll} style={{
                        marginTop: 16, padding: "10px 20px", borderRadius: 10,
                        background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)",
                        color: "#34d399", fontSize: 13, fontWeight: 600, cursor: "pointer",
                    }}>
                        {f.clearFilters}
                    </button>
                </div>
            ) : (
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 16,
                }}>
                    {paginated.map(deal => (
                        <DealCard key={deal.id} deal={deal} />
                    ))}
                </div>
            )}

            {/* ════ PAGINACIÓN ════ */}
            {totalPages > 1 && (
                <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    gap: 8, marginTop: 48,
                }}>
                    {/* Anterior */}
                    <button
                        onClick={() => { setPage(p => Math.max(1, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        disabled={page === 1}
                        style={{
                            padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: page === 1 ? "default" : "pointer",
                            border: "1px solid rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.04)",
                            color: page === 1 ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                            transition: "all 0.2s",
                        }}
                    >
                        {f.prev}
                    </button>

                    {/* Números de página */}
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
                        .reduce((acc, p, idx, arr) => {
                            if (idx > 0 && p - arr[idx - 1] > 1) acc.push("...");
                            acc.push(p);
                            return acc;
                        }, [])
                        .map((p, idx) =>
                            p === "..." ? (
                                <span key={`ellipsis-${idx}`} style={{ color: "rgba(255,255,255,0.2)", fontSize: 13, padding: "0 4px" }}>…</span>
                            ) : (
                                <button
                                    key={p}
                                    onClick={() => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                    style={{
                                        width: 38, height: 38, borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer",
                                        border: page === p ? "1px solid #10b981" : "1px solid rgba(255,255,255,0.1)",
                                        background: page === p ? "rgba(16,185,129,0.15)" : "rgba(255,255,255,0.04)",
                                        color: page === p ? "#34d399" : "rgba(255,255,255,0.5)",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    {p}
                                </button>
                            )
                        )
                    }

                    {/* Siguiente */}
                    <button
                        onClick={() => { setPage(p => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        disabled={page === totalPages}
                        style={{
                            padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: page === totalPages ? "default" : "pointer",
                            border: "1px solid rgba(255,255,255,0.1)",
                            background: "rgba(255,255,255,0.04)",
                            color: page === totalPages ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.6)",
                            transition: "all 0.2s",
                        }}
                    >
                        {f.next}
                    </button>
                </div>
            )}
        </div>
    );
}