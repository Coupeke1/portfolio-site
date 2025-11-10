/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'primary-100': 'var(--color-primary-100)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                background: 'var(--color-bg)',
                surface: 'var(--color-surface)',
                border: 'var(--color-border)',
                'text-primary': 'var(--color-text)',
                'text-muted': 'var(--color-text-muted)',
                success: 'var(--color-success)',
                warning: 'var(--color-warning)',
                danger: 'var(--color-danger)'
            }
        }
    },
    plugins: [],
};
