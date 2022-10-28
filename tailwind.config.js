/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },

        extend: {
            colors: {
                blueGreen: "#2C9D91",
                green: "#3A7A4E",
                myBlack: "rgb(40, 40, 40)",
                bronze: "#CD7F20",
            },
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
};
