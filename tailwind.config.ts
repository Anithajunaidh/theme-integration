
const kebabcase = require('lodash.kebabcase');
const tokens = require('./src/components/theme/tokens');
import type { Config } from "tailwindcss";

const transformTokens = (tokenObject: Record<string, any>, category: string) => {
  return Object.values(tokenObject).reduce((acc, token) => {
    acc[kebabcase(token.attributes.type)] = token.value;
    return acc;
  }, {});
};

const colors = transformTokens(tokens.color, 'color');
const spacing = transformTokens(tokens.spacing, 'spacing');
const screens=transformTokens(tokens.screens,'screens');
const typography = transformTokens(tokens.typography, 'typography');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      ...spacing
    },
    colors:{
      ...colors,
    },
    screens:{
      ...screens
    },
    extend: {
      colors: {
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
