// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "m-feldgrau": "#82baf1",
        "m-white": "#F0F0F0",
        "m-onyx": "#414141",
        "m-red": "#af1d6a",
        "m-magenta": "#AE759F",
        "m-goldlight": "#fdf7e6",
        "m-gold": "#f1b805",
        "m-golddark": "#c09304",
        "m-golddarkest": "#483701",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
