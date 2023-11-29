/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'black-transparent': '#00000033',
            },
            backgroundImage: {
                'product-bg-1': "url('/src/assets/images/BOIB-bg-4.png')",
                'product-bg-2': "url('/src/assets/images/BOIB-bg-2.png')",
                'product-bg-3': "url('/src/assets/images/BOIB-bg-1.png')",
                'product-bg-4': "url('/src/assets/images/BOIB-bg-3.png')",

                'footer-texture': "url('/img/footer-texture.png')",
            },
            lineClamp: {
                8: '8',
                9: '9',
                10: '10',
            },
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/line-clamp'),
        // ...
    ],
};
