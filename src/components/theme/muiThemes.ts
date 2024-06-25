
import { createTheme } from '@mui/material/styles';
import { tokens } from './tokens';

const createMuiTheme = (mode, colors) => createTheme({
  palette: {
    mode,
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
    },
    error: {
      main: colors.error,
    },
    warning: {
      main: colors.warning,
    },
    info: {
      main: colors.info,
    },
    background: {
      default: colors.background,
      paper: colors.backgroundSecondary,
    },
    text: {
      primary: colors.foreground,
      secondary: colors.foregroundSecondary,
    },
  },
  spacing: (factor: number) => `${factor * 4}px`,
  breakpoints: {
    values: {
      xs: 0,
      sm: parseInt(tokens.screens.sm.value, 10),
      md: parseInt(tokens.screens.md.value, 10),
      lg: parseInt(tokens.screens.lg.value, 10),
      xl: parseInt(tokens.screens.xl.value, 10),
    },
  },
});

const muiTheme = {
  light: createMuiTheme('light', {
    primary: tokens.color.primary.value,
    primaryLight: tokens.color.primary_light.value,
    secondary: tokens.color.black.value,
    secondaryLight: tokens.color.black_light.value,
    error: tokens.color.error.value,
    warning: tokens.color.warning.value,
    info: tokens.color.info.value,
    background: tokens.color.white.value,
    backgroundSecondary: tokens.color.white_dark.value,
    foreground: tokens.color.black.value,
    foregroundSecondary: tokens.color.white_dark.value,
  }),
  dark: createMuiTheme('dark', {
    primary: tokens.color.primary.value,
    primaryLight: tokens.color.primary_light.value,
    secondary: tokens.color.black.value,
    secondaryLight: tokens.color.black_light.value,
    error: tokens.color.error.value,
    warning: tokens.color.warning.value,
    info: tokens.color.info.value,
    background: tokens.color.black.value,
    backgroundSecondary: tokens.color.black_light.value,
    foreground: tokens.color.white.value,
    foregroundSecondary: tokens.color.white_dark.value,
  }),
  emerald: createMuiTheme('light', {
    primary: tokens.color.primary.value,
    primaryLight: tokens.color.primary_light.value,
    error: tokens.color.error.value,
    warning: tokens.color.warning.value,
    info: tokens.color.info.value,
    foreground: tokens.color.black.value,
    foregroundSecondary: tokens.color.white.value,
  }),
  pink: createMuiTheme('light', {
    primary: tokens.color.primary.value,
    primaryLight: tokens.color.primary_light.value,
    error: tokens.color.error.value,
    warning: tokens.color.warning.value,
    info: tokens.color.info.value,
    foreground: tokens.color.black.value,
    foregroundSecondary: tokens.color.white.value,
  }),
};



export default muiTheme;
