// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://mathiasmeeus.dev',

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
});
