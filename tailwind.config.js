module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1140px',
        // => @media (min-width: 1280px) { ... }
        },
        extend: {
            colors: {
                "btnStandard":"#e51157",
                "darkBG":"#0F141D",
                "footerBG":"#ED217C",
                "ourBlue":"#1B2634",
            },
            fontFamily: {
                'inter': ['inter', 'sans-serif'],
                },
            spacing: {
                '72': '18rem',
                '76': '19rem',
                '80': '20rem',
                '88': '22rem',
                '96': '24rem',
                '152':'38rem',
                '190': '48rem',
            },
            fontSize: {
                'xxs': '0.5rem',
                'xs': '.75rem',
                'sm': '.875rem',
                'base': '1rem',
                'lg': '1.125rem',
                'xl': '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '4rem',
                '7xl': '5rem',
                '8xl': '6rem',
                '9xl': '7rem',
                '10xl': '8rem',
            },
            opacity: {
                '0': '0',
                '20': '0.2',
                '40': '0.4',
                '60': '0.6',
                '80': '0.8',
                '85': '0.85',
                '90': '0.9',
                '100': '1',
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
