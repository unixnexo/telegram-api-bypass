/** original idea from https://github.com/soheylfarzane/TelegramByapss/blob/main/index.js */
async function handleRequest(request) {
  const url = new URL(request.url);

  // Extract the 'text' parameter from the query string
  const text = url.searchParams.get('text');

  if (!text) {
    return new Response('Bad Request: "text" parameter is required', { status: 400 });
  }

  // Construct the Telegram API URL
  const telegramUrl = `https://api.telegram.org/bot{TOKEN}/sendMessage?chat_id={CHAT_ID}&text=${encodeURIComponent(text)}`;

  try {
    const response = await fetch(telegramUrl);
    return new Response(await response.text(), {
      status: response.status,
      headers: {
        'content-type': 'application/json',
      },
    });
  } catch (error) {
    return new Response('Internal Server Error', {
      status: 500,
      headers: {
        'content-type': 'text/plain',
      },
    });
  }
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

