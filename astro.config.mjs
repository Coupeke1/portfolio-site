// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: 'https://mathiasm.dev',
    output: 'static',

    i18n: {
        defaultLocale: 'nl',
        locales: ['nl', 'en'],
        routing: {
            prefixDefaultLocale: false,
            redirectToDefaultLocale: false,
        },
        fallback: { en: 'nl' },
    },

    integrations: [
        mdx(),
        sitemap({
            i18n: {
                defaultLocale: 'nl',
                locales: { nl: 'nl-BE', en: 'en' },
            },
        }),
        icon({
            include: {
                lucide: ['*'],
                'simple-icons': ['*'],
            },
        }),
    ],

    markdown: {
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark-dimmed',
            },
            wrap: true,
        },
    },

    vite: {
        plugins: [tailwindcss()],
    },

    // NOTE: Astro 5.12.x has no global default for image `format` or `quality`.
    // Set `format="avif"` (or `format={['avif', 'webp']}`) and `quality={78}` per
    // `<Image>` to get modern formats. Sharp is wired here explicitly so the
    // service entrypoint is unambiguous across deploy environments.
    image: {
        service: { entrypoint: 'astro/assets/services/sharp' },
    },

    adapter: cloudflare()
});