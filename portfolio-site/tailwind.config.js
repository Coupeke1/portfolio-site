/** @type {import('tailwindcss').Config} */
export const content = [
    './src/**/*.{astro,html,js,jsx,ts,tsx,mdx}',
];
export const theme = {
    extend: {
        colors: {
            primary: '#1e293b', // slate-800
            accent: '#38bdf8', // sky-400
            background: '#f8fafc', // slate-50
            dark: '#0f172a', // slate-900
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif'],
        },
    },
};
export const darkMode = 'class';
export const plugins = [];
