//este archivo debe llamar a api ...deals para montar las ofertas
import DealCard from "../components/DealCard";

async function getDeals() {
    //const res = await fetch("http://localhost:3000/api/deals", {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/deals`, {
        next: { revalidate: 60 }, // cache de 60s (opcional)
    });

    if (!res.ok) {
        throw new Error("Error fetching deals");
    }

    return res.json();
}

// function getImageUrl(steamAppID) {
//     if (!steamAppID) return "/placeholder.jpg";
//     return `https://cdn.cloudflare.steamstatic.com/steam/apps/${steamAppID}/header.jpg`;
// }

export default async function DealsPage() {
    const deals = await getDeals();

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-10">
                    Ofertas disponibles
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal) => (

                        <DealCard key={deal.id} deal={deal} />


                    ))}
                </div>
            </div>
        </main>
    );
}