import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          default: '#3461FF',
          dark: '#232038',

        },
        customGray: '#FAFAFA',  // Renamed to avoid conflicts
        customBlack: '#0B0B0B',  // Renamed to avoid conflicts
        customTextBlue: '#3461FF',  // Renamed to avoid conflicts
      },
    },
  
  },
  plugins: [],
};
export default config;
