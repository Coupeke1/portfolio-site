// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },

  integrations: [sitemap(), mdx(), tailwind()],
});