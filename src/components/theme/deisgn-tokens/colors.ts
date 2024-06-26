export interface ColorToken {
    value: string;
    type: string;
  }
  
  const colors: Record<string, ColorToken> = {
  primary: {
    value: "#3A4D7E",
    type: "color"
  },
  primary_light: {
    value: "#B9C4DF",
    type: "color"
  },
  black: {
    value: "#29322E",
    type: "color"
  },
  black_light: {
    value: "#404F48",
    type: "color"
  },
  white: {
    value: "#FFFFFF",
    type: "color"
  },
  white_dark: {
    value: "#F1F5F8",
    type: "color"
  },
  error: {
    value: "#EB6957",
    type: "color"
  },
  warning: {
    value: "#F2C94C",
    type: "color"
  },
  info: {
    value: "#AAC2FF",
    type: "color"
  }
};
export default colors;
