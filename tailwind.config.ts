import type { Config } from 'tailwindcss';
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-morphism': 'var(--glass-morphism)',
        'hero-dark-pattern': "url('./../../public/dark-pattern.svg')",
        'hero-light-pattern': "url('./../../public/pattern.svg')",
      },
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        heading: 'var(--color-heading)',
        text: 'var(--color-text)',
        background: 'var(--color-background)',
      },
      animation: {
        "text-gradient": "text 1.5s linear infinite",
        gradient: 'animatedgradient 6s ease infinite alternate',
        "card-visible": "card-visible 0.8s ease-in-out forwards",
        "card-hidden": "card-on-stack 0.8s ease-in-out forwards",
        "card-details": "card-details 0.8s ease-in-out forwards",
        "card-details-hidden": "card-details 0.8s ease-in-out reverse",
      },
      backgroundSize: {
        '300%': '300%',
      },
      keyframes: {
        text: {
          to: {
            backgroundPosition: "200% center",
          },
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        "card-visible": {
          "0%": {
            transform:
              "rotate3d(1, 12, -3, 18deg) translate3d(210px, 0px, 90px)",
          },
          "95%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
          "100%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
        },
        "card-on-stack": {
          "0%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
          "5%": {
            transform:
              "rotate3d(0, 0.2, 0, 180deg) translate3d(0px, calc(150% - 45vh), 0px) scale(3)",
          },
          "100%": {
            transform: "rotate3d(0, 0, 0, 0) translate3d(0, 0px, 0px)",
          },
        },
        "card-details": {
          "0%": {
            opacity: '0',
            pointerEvents: "none",
          },
          "80%": {
            opacity: '0',
            pointerEvents: "none",
          },
          "100%": {
            opacity: '1',
            pointerEvents: "auto",
          },
        },
      }
    },
    container: {
      center: true,
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-patterns'), nextui(), require("daisyui")],
  darkMode: 'class',
};
export default config;
