import OfertasSteamContent from "../components/OfertasSteamContent";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals?store=1`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const PAGE_URL = "https://juegosbaratospc.com/ofertas-steam";

export const metadata = {
    title: "Ofertas PC esta semana | Mejores descuentos en juegos ahora mismo",
    description:
        "Las mejores ofertas de juegos para PC actualizadas esta semana. Descuentos de hasta el 90% en Steam y tiendas verificadas. Compara precios automáticamente.",
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: "Ofertas PC esta semana | Mejores descuentos en juegos ahora mismo",
        description: "Las mejores ofertas de juegos para PC actualizadas esta semana. Descuentos de hasta el 90% en Steam y tiendas verificadas. Compara precios automáticamente.",
        url: PAGE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
        images: [{ url: "https://juegosbaratospc.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ofertas PC esta semana | Mejores descuentos en juegos ahora mismo",
        description: "Las mejores ofertas de juegos para PC actualizadas esta semana. Descuentos de hasta el 90% en Steam y tiendas verificadas.",
        images: ["https://juegosbaratospc.com/og-image.png"],
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "¿Cómo funcionan las ofertas semanales de juegos para PC?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las tiendas digitales como Steam, Fanatical o Humble Store publican descuentos nuevos cada semana, a veces coincidiendo con lanzamientos o eventos especiales. Los descuentos pueden llegar al 90% en títulos populares." },
        },
        {
            "@type": "Question",
            "name": "¿Cuáles son las mejores épocas para comprar juegos de PC baratos?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las rebajas más grandes del año suelen ocurrir durante el Steam Summer Sale (junio-julio), el Steam Winter Sale (diciembre-enero), el Black Friday (noviembre) y el Steam Autumn Sale. Fuera de estas fechas, muchas tiendas mantienen ofertas semanales con descuentos de hasta el 90% en títulos AAA e indie." },
        },
        {
            "@type": "Question",
            "name": "Consejos para sacar el máximo partido a las ofertas",
            "acceptedAnswer": { "@type": "Answer", "text": "Revisa esta página al inicio de la semana — los mejores descuentos aparecen los lunes. Fíjate en el score de Metacritic junto al precio para elegir calidad garantizada. Compara el descuento actual con el precio histórico antes de comprar. Añade esta página a favoritos para no perderte ninguna oferta flash." },
        },
        {
            "@type": "Question",
            "name": "¿Con qué frecuencia se actualizan los precios?",
            "acceptedAnswer": { "@type": "Answer", "text": "Los precios se actualizan automáticamente varias veces al día para reflejar cambios en descuentos, promociones flash o nuevas campañas semanales. Así siempre ves información real y actualizada, sin datos desfasados." },
        },
    ],
};

export default async function OfertasSteam() {
    const deals = await getDeals();
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <OfertasSteamContent deals={deals} />
        </>
    );
}
