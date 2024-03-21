/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      gray: {
        asphalt: "#111729",
        anthracite: "#1D1B48",
        slate: "#20293A",
        pearl: "#CDD5E0",
      },
      blue: {
        electric: "#3662E3",
        sapphire: "#364153",
        navy: "#4A5567",
      },
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/hero-image-github-profile.png')",
      },
    },
  },
  plugins: [],
};
