const ASSETS = [
    "cerberOnline",
    "cerberPuddle",
    "cerberSphere",
    "Cerbongo",
    "cerbyHug",
    "minaOno",
    "Nuzzle",
    "pogs",
    "ShikanokoNokonokoKoshiwanwan"
]

export async function onRequest(context) {
    const url = new URL(context.request.url);

    const randomIndex = Math.floor(Math.random() * ASSETS.length);
    const randomFile = ASSETS[randomIndex];

    url.pathname = `/assets/emotes/${randomFile}.webp`;

    const response = await fetch(url.toString());
    return new Response(response.body, {
        headers: { 'Content-Type': response.headers.get('Content-Type') },
    });
}
