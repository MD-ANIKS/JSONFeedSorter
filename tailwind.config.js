/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html", "./public/script.js"],
    theme: {
        screens: {
            mobile: { max: "375px" },

            // 'sm': '640px',
            sm: "375px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }
        },
        extend: {},
    },
    plugins: [],
};
