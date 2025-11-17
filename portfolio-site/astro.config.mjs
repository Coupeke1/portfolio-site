// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import {defineConfig} from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    site: 'https://mathiasmeeus.dev',
    integrations: [mdx(), sitemap(), icon(
        {
            include: {
                lucide: ['*']
            },
        }
    )],

    vite: {
        plugins: [tailwindcss()],
    },
});