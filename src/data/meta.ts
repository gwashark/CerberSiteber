import type { MetaTagProps, MetaLinkProps } from "../types/components";

export const metaTags: MetaTagProps[] = [
  { name: "viewport", content: "width=device-width, initial-scale=1" },
  { name: "title", content: "CerberVT" },
  {
    name: "description",
    content:
      "Cerber was named after Cerberus, the gatekeeper of Hell, and lives under the UK. She was entranced by video games, anime, VTubers and idols.",
  },
  {
    name: "keywords",
    content: "cerbervt, cerber, twitch, hellhound, vtuber, vedalverse",
  },
  { name: "robots", content: "index, follow" },
  { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
  { name: "language", content: "English" },
  { name: "theme-color", content: "#9f4dd6" },
  {
    property: "og:image",
    content: "https://cerbervt.pages.dev/assets/embedimage.png",
  },
  { name: "twitter:card", content: "summary_large_image" },
];

export const metaLinks: MetaLinkProps[] = [
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Yomogi&display=swap",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "assets/favicons/favicon-32x32.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "assets/favicons/favicon-16x16.png",
  },
  {
    rel: "manifest",
    href: "/manifest.json",
  },
];
