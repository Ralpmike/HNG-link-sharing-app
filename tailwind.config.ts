import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",


  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'Inputshadow': '0px 0px 32px 0px rgba(99, 60, 255, 0.25);',
        'btnshadow': '0px 0px 32px 0px rgba(99, 60, 255, 0.25);',
      },

      fontSize: {
        'heading-m': ['32px', '150%'], // 32px font size with 150% line height
        'heading-s': ['16px', '150%'], // 16px font size with 150% line height
        'body-m': ['16px', '150%'],    // 16px font size with 150% line height
        'body-s': ['12px', '150%'],    // 12px font size with 150% line height
      },
      colors: {
        primary: {
          DEFAULT: '#633CFF', // or primary: '#633CFF',
          light: '#BEADFF',
          lighter: '#EFEBFF'
        },
        dark: {
          DEFAULT: '#333333', // or dark: '#333333',
          light: '#737373'
        },
        gray: {
          DEFAULT: '#D9D9D9', // or gray: '#D9D9D9',
          light: '#FAFAFA'
        },
        white: '#FFFFFF',
        red: '#FF3939'
      },
    },
  },
  plugins: [

  ],
};

export default config;