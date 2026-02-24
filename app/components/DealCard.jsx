import Image from "next/image";

export default function DealCard({ deal }) {
    const discount = Math.round(
        ((deal.originalPrice - deal.price) / deal.originalPrice) * 100
    );

    const imageURL = deal.steamAppID
        ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${deal.steamAppID}/header.jpg`
        : "/placeholder.jpg";

    const API_BASE = `${process.env.NEXT_PUBLIC_API_URL}`;

    return (
        <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">

            {/* Imagen */}
            <img
                src={imageURL}
                alt={deal.title}
                className="w-full h-48 object-cover"
            />

            {/* Contenido */}
            <div className="p-4 flex flex-col flex-1">

                {/* Título */}
                <h2 className="font-semibold text-sm line-clamp-2 mb-2">
                    {deal.title}
                </h2>

                {/* Precios */}
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-sm">
                        {deal.originalPrice}€
                    </span>
                    <span className="text-green-600 font-bold text-lg">
                        {deal.price}€
                    </span>
                </div>

                {/* Descuento */}
                {discount > 0 && (
                    <span className="self-start inline-flex items-center bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded mb-4">
                        -{discount}%
                    </span>
                )}

                {/* Botón */}
                <a
                    href={`${API_BASE}/r/${deal.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
                >
                    Comprar ahora
                </a>

            </div>
        </div>
    );
}
