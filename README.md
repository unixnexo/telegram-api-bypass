## What is it?
If you wanna use Telegram API on a server that can't access it, mainly because of being banned by Telegram or the country itself blocking Telegram from inside, like Iran, you can use Cloudflare workers as something like a proxy to send and receive requests from the API for free.

## Example
In the _worker.js_ file you can find a simple script that gets the text from the url parameter and sends it to a Telegram user.

## What do you need to start?
- Create a Bot in Telegram using the https://t.me/BotFather; You need the Bot's TOKEN, and the User's CHAT_ID.
- Create a free Cloudflare account.

## How to do it?
- Create a _worker_ in the Cloudflare dashboard, name it whatever you want, and paste the code from _worker.js_ file into _worker.js_ file in the cloudflare's worker.
- Change the _TOKEN_ and _CHAT_ID_ with your data, you can either put them directly in the script or use an environment variable.
- Deploy the worker and get the its url.
- Now you should be able to send a message to the user by using the _text_ parameter after the url; <br/>
  EX: ```https://my-worker-name.workers.dev/?text=hi mom!```.
