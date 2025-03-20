// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";

const site: string = "cerbervt.pages.dev";

// https://astro.build/config
export default defineConfig({
  outDir: "./site",
  integrations: [
    sitemap(),
    robots({
      host: site,
      sitemap: [`https://${site}/sitemap-0.xml`, `https://${site}/sitemap-index.xml`],
      policy: [
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 5,
        },
      ],
    }),
  ],
  site: `https://${site}/`,
});
