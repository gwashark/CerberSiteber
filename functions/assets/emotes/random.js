const ASSETS = [
    "cerberOnline.gif",
    "cerberPuddle.gif",
    "cerberSphere.gif",
    "Cerbongo.gif",
    "cerbyHug.png",
    "minaOno.gif",
    "Nuzzle.gif",
    "pogs.gif",
    "ShikanokoNokonokoKoshiwanwan.gif"
]

export async function onRequest(context) {
    const url = new URL(context.request.url);

    const randomIndex = Math.floor(Math.random() * ASSETS.length);
    const randomFile = ASSETS[randomIndex];

    url.pathname = `/assets/emotes/${randomFile}`;

    const response = await fetch(url.toString());
    return new Response(response.body, {
        headers: { 'Content-Type': response.headers.get('Content-Type') },
    });
}
