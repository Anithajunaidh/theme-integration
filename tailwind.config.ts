
const kebabcase = require('lodash.kebabcase');
const tokens = require('./src/components/theme/tokens');
// import type { Tokens } from '@/components/theme/tokens'
import type { Config } from "tailwindcss";
const { themes } = require('./src/components/theme/tokens');
import type { IColor } from '@/components/theme/tokens';

// const typedTokens: Tokens = tokens; 
// const colors = Object.fromEntries(
//   Object.values(typedTokens.color).map(({ attributes, value }) => [
//     kebabcase(attributes.type),
//     value,
//   ])
// );
// const spacing=Object.fromEntries(
//   Object.values(typedTokens.spacing).map(({ attributes, value }) => [
//     kebabcase(attributes.type),
//     value,
//   ])
// );
// Extract colors and map them to Tailwind format
// const themeColors = (theme: IColor) => {
//   const colors: Record<string, string> = {};
//   for (const [key, value] of Object.entries(theme)) {
//     if (typeof value === 'string') {
//       colors[kebabcase(key)] = value;
//     }
//   }
//   return colors;
// };
const themeColors = (theme: IColor) => {
  const colors: Record<string, string> = {};
  for (const [key, value] of Object.entries(theme)) {
    if (typeof value === 'string') {
      colors[key] = value;
    }
  }
  return colors;
};
const darkColors = themeColors(themes.darkTheme);
const lightColors = themeColors(themes.lightTheme);
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
   // spacing,
    extend: {
      colors: {
        ...darkColors,
        ...lightColors,
        'th-background': 'var(--background)',
        'th-background-secondary': 'var(--background-secondary)',
        'th-foreground': 'var(--foreground)',
        'th-primary-dark': 'var(--primary-dark)',
        'th-primary-medium': 'var(--primary-medium)',
        'th-primary-light': 'var(--primary-light)',
        'th-accent-dark': 'var(--accent-dark)',
        'th-accent-medium': 'var(--accent-medium)',
        'th-accent-light': 'var(--accent-light)',
        //...colors,
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
