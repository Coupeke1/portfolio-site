/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}', // Include all template files
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    DEFAULT: 'rgb(var(--gray) / <alpha-value>)',
                    light: 'rgb(var(--gray-light) / <alpha-value>)',
                    dark: 'rgb(var(--gray-dark) / <alpha-value>)',
                },
                black: 'rgb(var(--black) / <alpha-value>)',
            },
            boxShadow: {
                DEFAULT: 'var(--box-shadow)',
            },
        },
    },
    plugins: [],
};
