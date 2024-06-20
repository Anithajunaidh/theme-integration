import typographyTokens from "./design-tokens/typography";

export interface TokenAttributes {
  category: string;
  type: string;
}

export interface Token {
  value: string;
  type: string;
  original: {
    value: string;
    type: string;
  };
  name: string;
  attributes: TokenAttributes;
  path: string[];
}

export interface Tokens {
  color: Record<string, Token>;
  spacing: Record<string, Token>;
}

//module.exports = {
  export const tokens = {
  "color": {
    "primary": {
      "value": "#3a4d7e",
      "type": "color",
      "original": {
        "value": "#3A4D7E",
        "type": "color"
      },
      "name": "colorPrimary",
      "attributes": {
        "category": "color",
        "type": "primary"
      },
      "path": [
        "color",
        "primary"
      ]
      },
    "primary_light": {
      "value": "#b9c4df",
      "type": "color",
      "original": {
        "value": "#B9C4DF",
        "type": "color"
      },
      "name": "colorPrimaryLight",
      "attributes": {
        "category": "color",
        "type": "primary_light"
      },
      "path": [
        "color",
        "primary_light"
      ]
    },
    "black": {
      "value": "#29322e",
      "type": "color",
      "original": {
        "value": "#29322E",
        "type": "color"
      },
      "name": "colorBlack",
      "attributes": {
        "category": "color",
        "type": "black"
      },
      "path": [
        "color",
        "black"
      ]
    },
    "black_light": {
      "value": "#404f48",
      "type": "color",
      "original": {
        "value": "#404F48",
        "type": "color"
      },
      "name": "colorBlackLight",
      "attributes": {
        "category": "color",
        "type": "black_light"
      },
      "path": [
        "color",
        "black_light"
      ]
    },
    "white": {
      "value": "#ffffff",
      "type": "color",
      "original": {
        "value": "#FFFFFF",
        "type": "color"
      },
      "name": "colorWhite",
      "attributes": {
        "category": "color",
        "type": "white"
      },
      "path": [
        "color",
        "white"
      ]
    },
    "white_dark": {
      "value": "#f1f5f8",
      "type": "color",
      "original": {
        "value": "#F1F5F8",
        "type": "color"
      },
      "name": "colorWhiteDark",
      "attributes": {
        "category": "color",
        "type": "white_dark"
      },
      "path": [
        "color",
        "white_dark"
      ]
    },
    "error": {
      "value": "#eb6957",
      "type": "color",
      "original": {
        "value": "#EB6957",
        "type": "color"
      },
      "name": "colorError",
      "attributes": {
        "category": "color",
        "type": "error"
      },
      "path": [
        "color",
        "error"
      ]
    },
    "warning": {
      "value": "#f2c94c",
      "type": "color",
      "original": {
        "value": "#F2C94C",
        "type": "color"
      },
      "name": "colorWarning",
      "attributes": {
        "category": "color",
        "type": "warning"
      },
      "path": [
        "color",
        "warning"
      ]
    },
    "info": {
      "value": "#aac2ff",
      "type": "color",
      "original": {
        "value": "#AAC2FF",
        "type": "color"
      },
      "name": "colorInfo",
      "attributes": {
        "category": "color",
        "type": "info"
      },
      "path": [
        "color",
        "info"
      ]
    }
  },

  //spacing tokens
  
  "spacing": {
    "spacing_small": {
      "value": "4px",
      "type": "spacing",
      "original": {
        "value": "4px",
        "type": "spacing"
      },
      "name": "spacingSmall",
      "attributes": {
        "category": "spacing",
        "type": "small"
      },
      "path": [
        "spacing",
        "spacing_small"
      ]
    },
    "spacing_medium": {
      "value": "8px",
      "type": "spacing",
      "original": {
        "value": "8px",
        "type": "spacing"
      },
      "name": "spacingMedium",
      "attributes": {
        "category": "spacing",
        "type": "medium"
      },
      "path": [
        "spacing",
        "spacing_medium"
      ]
    },
    /* other spacing tokens */
  },
  screens: {
    sm: {
      value: "640px",
      type: "screen",
      original: {
        value: "640px",
        type: "screen"
      },
      name: "screenSmall",
      attributes: {
        category: "screen",
        type: "small"
      },
      path: [
        "screens",
        "sm"
      ]
    },
    md: {
      value: "768px",
      type: "screen",
      original: {
        value: "768px",
        type: "screen"
      },
      name: "screenMedium",
      attributes: {
        category: "screen",
        type: "medium"
      },
      path: [
        "screens",
        "md"
      ]
    },
    lg: {
      value: "1024px",
      type: "screen",
      original: {
        value: "1024px",
        type: "screen"
      },
      name: "screenLarge",
      attributes: {
        category: "screen",
        type: "lg"
      },
      path: [
        "screens",
        "lg"
      ]
    },
    xl: {
      value: "1280px",
      type: "screen",
      original: {
        value: "1280px",
        type: "screen"
      },
      name: "screenExtraLarge",
      attributes: {
        category: "screen",
        type: "xl"
      },
      path: [
        "screens",
        "xl"
      ]
    },
    '2xl': {
      value: "1536px",
      type: "screen",
      original: {
        value: "1536px",
        type: "screen"
      },
      name: "screen2ExtraLarge",
      attributes: {
        category: "screen",
        type: "2xl"
      },
      path: [
        "screens",
        "2xl"
      ]
    },
    '3xl': {
      value: "1920px",
      type: "screen",
      original: {
        value: "1920px",
        type: "screen"
      },
      name: "screen3ExtraLarge",
      attributes: {
        category: "screen",
        type: "3xl"
      },
      path: [
        "screens",
        "3xl"
      ]
    },
    'portrait-sm': {
      value: { 'min-width': '320px', 'max-width': '480px' },
      type: "screen",
      original: {
        value: { 'min-width': '320px', 'max-width': '480px' },
        type: "screen"
      },
      name: "screenPortraitSmall",
      attributes: {
        category: "screen",
        type: "portrait-sm"
      },
      path: [
        "screens",
        "portrait-sm"
      ]
    },
    'landscape-sm': {
      value: { 'min-width': '481px', 'max-width': '640px' },
      type: "screen",
      original: {
        value: { 'min-width': '481px', 'max-width': '640px' },
        type: "screen"
      },
      name: "screenLandscapeSmall",
      attributes: {
        category: "screen",
        type: "landscape-sm"
      },
      path: [
        "screens",
        "landscape-sm"
      ]
    },
    'portrait-md': {
      value: { 'min-width': '768px', 'max-width': '1024px' },
      type: "screen",
      original: {
        value: { 'min-width': '768px', 'max-width': '1024px' },
        type: "screen"
      },
      name: "screenPortraitMedium",
      attributes: {
        category: "screen",
        type: "portrait-md"
      },
      path: [
        "screens",
        "portrait-md"
      ]
    },
    'landscape-md': {
      value: { 'min-width': '1025px', 'max-width': '1280px' },
      type: "screen",
      original: {
        value: { 'min-width': '1025px', 'max-width': '1280px' },
        type: "screen"
      },
      name: "screenLandscapeMedium",
      attributes: {
        category: "screen",
        type: "landscape-md"
      },
      path: [
        "screens",
        "landscape-md"
      ]
    },
    // Add more screens as needed
  },
  typography: typographyTokens,
};

// export interface IColor {
//   bgPrimary: string;
//   bgSecondary: string;
//   textPrimary: string;
//   textSecondary: string;
//   buttonBackgroundGradient: string[];
//   buttonTextPrimary: string;
//   inputFieldBackground: string;
//   inputFieldOutlineColor: string;
//   inputFieldPlaceholderColor: string;
//   inputFieldPlaceholderColorOutlined: string;
//   inputFieldBorderColor: string;
//   errorTextColor: string;
//   checkboxColor: string;
//   searchBoxBackground: string;
//   inputColor: string;
//   spinnerColor: string;
//   tabBarColor: string;
//   tabBarLabelColor: string;
//   tabBarIconColor: string;
//   messageCardColor: string;
//   messageCardUnreadColor: string;
//   badgeColor: string;
//   listCardBorderColor: string;
//   outlinedButtonBackground: string;
//   outlinedButtonBorder: string;
//   roundedButtonBackground: string;
//   goldenColor: string;
//   progressBarColor: string;
//   selectedButtonBackgroundGradient: string[];
//   logoutBg: string;
//   sideButtonBg: string;
//   buttonTextSecondary: string;
//   transparentButtonBorder: string;
//   bottomLineColor: string;
//   optionDots: string;
//   cancelButtonBg: string;
//   warningButtonBg: string;
//   warningButtonTextColor: string;
//   statusBarColor: string;
//   navigationBarColor: string;
//   bodyBackgroundGradient: string[];
//   primaryCardBackground: string[];
//   secondaryCardBackground: string[];
//   tertiaryCardBackground: string[];
//   quaternaryCardBackground: string[];
//   sharedButtonBackground: string;
//   selectFriendBackground: string;
//   commonTextColor: string;
//   avatarCommonBg: string[];
//   maleGradientBg: string[];
// }

// const themeSharedColors = {
//   // background
//   logoutBg: "#CB060650",
//   sideButtonBg: "#3A3A3A",
//   // button
//   buttonTextPrimary: "#ffffff",
//   buttonTextSecondary: "#F10909",
//   warningButtonBg: "#f2cfcf",
//   warningButtonTextColor: "#F10909",
//   // text
//   errorTextColor: "#FF5858",
//   goldenColor: "#FDC93A",
//   // search box
//   inputColor: "#646367",
//   // badge
//   badgeColor: "#afafaf",
//   // progress bar
//   progressBarColor: "#000000",
//   // buttonBorder
//   transparentButtonBorder: "#D9D9D9",
//   bottomLineColor: "#9B9B9B26",
//   // cardBackground
//   primaryCardBackground: ["#FECFCD", "#FDDECD"],
//   secondaryCardBackground: ["#DBE0FD", "#E0F5FC"],
//   tertiaryCardBackground: ["#D4BFC0", "#FCF2D8"],
//   quaternaryCardBackground: ["#E3D2C9", "#F5CEF9"],
//   sharedButtonBackground: "#333333",
//   selectFriendBackground: "#434343",
//   commonTextColor: "#EDEDED",
//   maleGradientBg: ["#27A1E9", "#27A1E9"],
// };

// export const darkTheme: IColor = {
//   ...themeSharedColors,
//   // background
//   bgPrimary: "#060410",
//   bgSecondary: "#151419",
//   avatarCommonBg: ["#434343", "#434343"],
//   // text
//   textPrimary: "#DFDFDF",
//   textSecondary: "#C8C8C8",
//   // inputField
//   inputFieldBackground: "#060410",
//   inputFieldOutlineColor: "#ababab",
//   inputFieldPlaceholderColor: "#dfdfdf80",
//   inputFieldPlaceholderColorOutlined: "#BBBBBB",
//   inputFieldBorderColor: "#4D4D4D",
//   // button
//   buttonBackgroundGradient: ["#aa2af8", "#e60f88"],
//   selectedButtonBackgroundGradient: ["#E50F88", "#AA2AF8"],
//   outlinedButtonBackground: "#0E0E0E",
//   outlinedButtonBorder: "#1a1a1a",
//   roundedButtonBackground: "#333333",
//   optionDots: "#F2F2F2",
//   cancelButtonBg: "#151419",
//   // checkbox
//   checkboxColor: "#FFFFFF",
//   // search box
//   searchBoxBackground: "#1a1a1a",
//   // spinner
//   spinnerColor: "#e60f88",
//   // tab bar
//   tabBarColor: "#090F17",
//   tabBarLabelColor: "#C4C4C4",
//   tabBarIconColor: "#ffffff",
//   // Message card
//   messageCardColor: "#151419",
//   messageCardUnreadColor: "#3d3d3d",
//   // list card
//   listCardBorderColor: "#222222",
//   statusBarColor: "#060410",
//   navigationBarColor: "#060410",
//   bodyBackgroundGradient: ["#aa2af8", "#e60f88"],
// };

// export const lightTheme: IColor = {
//   ...themeSharedColors,
//   // background
//   bgPrimary: "#ffffff",
//   bgSecondary: "#ededed",
//   avatarCommonBg: ["#e1e1e1", "#e1e1e1"],
//   // text
//   textPrimary: "#333333",
//   textSecondary: "#515151",
//   // inputField
//   inputFieldBackground: "#fff",
//   inputFieldOutlineColor: "#515151",
//   inputFieldPlaceholderColor: "#C6C6C6",
//   inputFieldPlaceholderColorOutlined: "#1a1a1a",
//   inputFieldBorderColor: "#d3d3d3",
//   // button
//   buttonBackgroundGradient: ["#946aee", "#3283e6"],
//   selectedButtonBackgroundGradient: ["#946aee", "#3283e6"],
//   outlinedButtonBackground: "#EDEDED",
//   outlinedButtonBorder: "#cccccc",
//   roundedButtonBackground: "#DFDFDF",
//   optionDots: "#000000",
//   cancelButtonBg: "#f4f4f4",
//   // checkbox
//   checkboxColor: "#000000",
//   // search box
//   searchBoxBackground: "#f6f6f6",
//   // spinner
//   spinnerColor: "#3283e6",
//   // tab bar
//   tabBarColor: "#EEF1F4",
//   tabBarLabelColor: "#2B2B2B",
//   tabBarIconColor: "#474747",
//   // Message card
//   messageCardColor: "#ededed",
//   messageCardUnreadColor: "#d4d4d4",
//   // list card
//   listCardBorderColor: "#d9d9d9",
//   statusBarColor: "#fff",
//   navigationBarColor: "#fff",
//   bodyBackgroundGradient: ["#946aee", "#3283e6"],
// };

// export const themes = { darkTheme, lightTheme };
