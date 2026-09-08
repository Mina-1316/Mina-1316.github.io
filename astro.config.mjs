// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import { satteri } from "@astrojs/markdown-satteri";
import { intlayer } from "astro-intlayer";
import { MdastModifiedDatePlugin } from "~/plugins/mdast/mdast-modified-date";
import svgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
  site: "https://mina1316.dev",

  integrations: [react(), mdx(), pagefind(), intlayer()],

  vite: {
    plugins: [tailwindcss(), svgr()],
  },

  markdown: {
    processor: satteri({
      mdastPlugins: [MdastModifiedDatePlugin],
    }),
  },
});
