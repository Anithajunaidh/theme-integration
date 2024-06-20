// theme.ts

import { createTheme, ThemeOptions } from '@mui/material/styles';
import {tokens} from "./tokens"

const theme: ThemeOptions = createTheme({
  palette: {
    primary: {
      main: tokens.color.primary.value,
    },
    error: {
      main: tokens.color.error.value,
    },
    warning: {
      main: tokens.color.warning.value,
    },
    info: {
      main: tokens.color.info.value,
    },
    // add other color tokens as needed
  },
  typography: {
    fontFamily: tokens.typography.fontFamily.value,
    fontSize: parseInt(tokens.typography.fontSize.value),
    fontWeightRegular: parseInt(tokens.typography.fontWeightNormal.value),
    fontWeightBold: parseInt(tokens.typography.fontWeightBold.value),
    // add other typography tokens as needed
  },
  spacing: parseInt(tokens.spacing.spacing_small.value), // or use a different spacing value
  breakpoints: {
    values: {
      xs: 0,
      sm: parseInt(tokens.screens.sm.value),
      md: parseInt(tokens.screens.md.value),
      lg: parseInt(tokens.screens.lg.value),
      xl: parseInt(tokens.screens.xl.value),
      // add other screen tokens as needed
    },
  },
});

export default theme;
