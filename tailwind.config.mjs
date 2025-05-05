/** @type {import('tailwindcss').Config} */

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            // Custom colors
            colors: {
                primary: '#11001f',
                secondary: '#fcf4ff',
                accent: '#ec1655',
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001f'
            },
            // Custom fonts
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            // Custom box shadow
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff'
            },
            // Custom backdrop blur
            backdropBlur: {
                md: '12px',
            },
            // Custom grid template columns
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))',
            },
        },
    },
    plugins: [],
}
