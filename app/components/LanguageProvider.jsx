"use client";

import { createContext, useContext, useState, useEffect } from "react";
import translations from "../i18n/translations";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLangState] = useState("es");

    useEffect(() => {
        const saved = localStorage.getItem("lang");
        if (saved === "es" || saved === "en") setLangState(saved);
    }, []);

    const setLang = (l) => {
        setLangState(l);
        localStorage.setItem("lang", l);
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
    return ctx;
}
