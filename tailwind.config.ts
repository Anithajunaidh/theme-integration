
const kebabcase = require('lodash.kebabcase');
import { tokens } from "./src/components/theme/deisgn-tokens";
import type { Config } from "tailwindcss";

const transformTokens = (tokenObject: Record<string, any>): Record<string, any> => {
  return Object.keys(tokenObject).reduce((acc: Record<string, any>, key: string) => {
    acc[kebabcase(key)] = tokenObject[key].value;
    return acc;
  }, {} as Record<string, any>);
};

const colors = transformTokens(tokens.color);
const spacing = transformTokens(tokens.spacing);
const screens = transformTokens(tokens.screens);
const typography = transformTokens(tokens.typography);

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
    colors: {
      ...colors,
    },
    screens: {
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
