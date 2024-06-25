import { createTheme, Theme } from '@mui/material/styles';
import spacingTokens from './deisgn-tokens/spacing';
import colors from './deisgn-tokens/colors';

const baseTheme = {
  spacing: (factor: number) => {
    switch (factor) {
      case 0: return `${spacingTokens.spaceXs.value}rem`;
      case 1: return `${spacingTokens.spaceS.value}rem`;
      case 2: return `${spacingTokens.spaceM.value}rem`;
      case 3: return `${spacingTokens.spaceL.value}rem`;
      case 4: return `${spacingTokens.spaceXl.value}rem`;
      case 5: return `${spacingTokens.spaceXxl.value}rem`;
      case 6: return `${spacingTokens.space3xl.value}rem`;
      default: return `${spacingTokens.spaceM.value}rem`; // Default case
    }
  },
};

const lightTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: colors.primary.value,
      light: colors.primary_light.value,
    },
    secondary: {
      main: colors.warning.value,
    },
    error: {
      main: colors.error.value,
    },
    background: {
      default: colors.white.value,
      paper: colors.white_dark.value,
    },
    text: {
      primary: colors.black.value,
      secondary: colors.black_light.value,
    },
  },
});

const darkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: colors.primary.value,
      light: colors.primary_light.value,
    },
    secondary: {
      main: colors.warning.value,
    },
    error: {
      main: colors.error.value,
    },
    background: {
      default: colors.black_light.value,
      paper: colors.primary.value,
    },
    text: {
      primary: colors.white.value,
      secondary: colors.primary_light.value,
    },
  },
});

const emeraldTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: colors.primary.value,
      light: colors.primary_light.value,
    },
    secondary: {
      main: colors.warning.value,
    },
    error: {
      main: colors.error.value,
    },
    background: {
      default: colors.primary_light.value,
      paper: colors.primary.value,
    },
    text: {
      primary: colors.black.value,
      secondary: colors.black_light.value,
    },
  },
});

const pinkTheme: Theme = createTheme({
  ...baseTheme,
  palette: {
    primary: {
      main: colors.error.value,
      light: colors.primary_light.value,
    },
    secondary: {
      main: colors.warning.value,
    },
    error: {
      main: colors.error.value,
    },
    background: {
      default: colors.error.value,
      paper: colors.warning.value,
    },
    text: {
      primary: colors.black.value,
      secondary: colors.black_light.value,
    },
  },
});

export const muiThemes = {
  light: lightTheme,
  dark: darkTheme,
  emerald: emeraldTheme,
  pink: pinkTheme,
};
export default muiThemes;