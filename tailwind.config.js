/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'europa': ['europalight', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'objektiv': ['objektivmk1', 'ui-sans-serif', 'system-ui', 'sans-serif'],
                'arboria': ['arboriabook', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
            colors: {
                gray: {
                    100: '#f2f2f2',
                    900: '#262626',
                }
            },
            spacing: {
                '15': '3.75rem',
                '17': '4.25rem',
                '30': '7.5rem',
                '44': '11rem',
                '52': '13rem',
                '60': '15rem',
                '70': '17.5rem',
                '96': '24rem',
            },
            borderRadius: {
                'tr-[100px]': '0 100px 0 0',
            },
            maxWidth: {
                '7xl': '80rem',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
    // Optimisations pour PNPM
    corePlugins: {
        preflight: true,
    },
};