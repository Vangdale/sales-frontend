export default function sitemap() {
    const baseUrl = "https://juegosbaratospc.com";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/ofertas-pc-semana`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/juegos-menos-de-5-euros`,
            lastModified: new Date(),
        },
    ];
}