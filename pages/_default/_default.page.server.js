import { renderToString } from "@vue/server-renderer";
import { html } from "vite-plugin-ssr";
import { createApp } from "./app";
import logoUrl from "./logo.png";

export { render };
export { passToClient };

const passToClient = ["pageProps", "routeParams"];

async function render(pageContext) {
  const app = createApp(pageContext);
  const appHtml = renderToString(app);

  const { documentProps } = pageContext;
  const title = (documentProps && documentProps.title) || "Vite SSR App";
  const desc =
    (documentProps && documentProps.description) ||
    "App using Vite and Vite-Plugin-SSR";

  return html`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link
          rel="icon"
          href="${logoUrl}"
          <meta
          name="viewport"
          content="width=device-width, initial-scale = 1.0"
        />
        <meta name="description" content="${desc} />
        <title>${title}</title>
      </head>
      <body>
        <div id="app">${html.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
