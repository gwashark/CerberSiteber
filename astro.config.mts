// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robots from "astro-robots";

const site: string = "https://cerbervt.pages.dev/";

// https://astro.build/config
export default defineConfig({
  outDir: "./site",
  integrations: [
    sitemap(),
    robots({
      host: site,
      sitemap: ["/sitemap.xml"],
      policy: [
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 5,
        },
      ],
    }),
  ],
  site: site,
});
