import Image from "next/image";

export default function DealCard({ deal }) {
    const discount = Math.round(
        ((deal.originalPrice - deal.price) / deal.originalPrice) * 100
    );

    const imageURL = deal.steamAppID
        ? `https://cdn.cloudflare.steamstatic.com/steam/apps/${deal.steamAppID}/header.jpg`
        : "/placeholder.jpg";

    const API_BASE = `${process.env.NEXT_PUBLIC_API_URL}`;

    const score = deal.metacriticScore;

    return (
        <div className="group bg-neutral-900 rounded-2xl border border-neutral-800 hover:border-green-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-500/10 transition-all duration-300 overflow-hidden flex flex-col">

            {/* Imagen + score */}
            <div className="relative">
                <img
                    src={imageURL}
                    alt={deal.title}
                    className="w-full h-48 object-cover"
                />
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col flex-1">

                <div className="flex items-center justify-between mb-3">
                    <h2 className="font-semibold text-md line-clamp-2 text-white">
                        {deal.title}
                    </h2>

                    <div className="flex items-center gap-1 bg-neutral-800 px-2 py-1">
                        <img
                            src="/Metacritic_M.png"
                            alt="Metacritic"
                            className="w-5 h-5"
                        />
                        <span className={`font-bold text-sm ${score >= 85
                                ? "text-green-400"
                                : score >= 70
                                    ? "text-yellow-400"
                                    : "text-red-400"
                            }`}>
                            {score}
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                    <span className="text-neutral-500 line-through text-sm">
                        {deal.originalPrice}€
                    </span>
                    <span className="text-green-500 font-bold text-lg">
                        {deal.price}€
                    </span>
                </div>

                {discount > 0 && (
                    <span className="self-start text-xs font-bold px-3 py-1 rounded-md mb-4 bg-red-600/20 text-red-400 shadow-sm shadow-red-500/30">
                        -{discount}%
                    </span>
                )}

                <a
                    href={`${API_BASE}/r/${deal.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block text-center bg-green-500 hover:bg-green-400 text-black py-2 rounded-xl font-semibold transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    Comprar ahora
                </a>
            </div>
        </div>
    );
}