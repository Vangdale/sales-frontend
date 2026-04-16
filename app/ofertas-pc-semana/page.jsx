import OfertasPCSemanaContent from "../components/OfertasPCSemanaContent";

async function getDeals() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals`, {
        next: { revalidate: 60 },
    });
    if (!res.ok) throw new Error("Error fetching deals");
    return res.json();
}

const PAGE_URL = "https://juegosbaratospc.com/ofertas-pc-semana";

const OG_TITLE = "Ofertas juegos PC | Precio, descuento y Metacritic";
const OG_DESC = "Cientos de ofertas de juegos para PC filtradas por precio, descuento y Metacritic. Actualizado desde Steam y 15+ tiendas verificadas.";

export const metadata = {
    title: OG_TITLE,
    description: OG_DESC,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: OG_TITLE,
        description: OG_DESC,
        url: PAGE_URL,
        siteName: "OfertasVideojuegos",
        type: "website",
        locale: "es_ES",
        images: [{ url: "https://juegosbaratospc.com/og-image.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: OG_TITLE,
        description: OG_DESC,
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
            "acceptedAnswer": { "@type": "Answer", "text": "Las tiendas digitales como Steam, Fanatical o Humble Store publican descuentos nuevos cada semana. Los descuentos pueden llegar al 90% en títulos populares. En OfertasVideojuegos monitorizamos estos precios de forma automática para que siempre veas el mejor precio disponible sin tener que revisar cada tienda manualmente." },
        },
        {
            "@type": "Question",
            "name": "¿Cuáles son las mejores épocas para comprar juegos de PC baratos?",
            "acceptedAnswer": { "@type": "Answer", "text": "Las rebajas más grandes del año suelen ocurrir durante el Steam Summer Sale (junio-julio), el Steam Winter Sale (diciembre-enero), el Black Friday (noviembre) y el Steam Autumn Sale. Fuera de estas fechas, muchas tiendas mantienen ofertas semanales con descuentos de hasta el 90% en títulos AAA e indie." },
        },
        {
            "@type": "Question",
            "name": "Consejos para sacar el máximo partido a las ofertas",
            "acceptedAnswer": { "@type": "Answer", "text": "Filtra por puntuación Metacritic para encontrar calidad garantizada al mejor precio. Usa el filtro de descuento para ver solo los chollos más agresivos. Revisa esta página al inicio de la semana — los mejores descuentos aparecen los lunes. Añade esta página a favoritos para no perderte ninguna oferta flash." },
        },
    ],
};

export default async function OfertasPCSemana() {
    const deals = await getDeals();
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <OfertasPCSemanaContent deals={deals} />
        </>
    );
}
