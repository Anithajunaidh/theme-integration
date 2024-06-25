export interface ScreenToken {
    value: string | Record<string, string>;
    type: string;
  }
  
  const screens: Record<string, ScreenToken> = {
    sm: {
      value: "640px",
      type: "screen"
    },
    md: {
      value: "768px",
      type: "screen"
    },
    lg: {
      value: "1024px",
      type: "screen"
    },
    xl: {
      value: "1280px",
      type: "screen"
    },
    "2xl": {
      value: "1536px",
      type: "screen"
    },
    "3xl": {
      value: "1920px",
      type: "screen"
    },
    "portrait-sm": {
      value: { "min-width": "320px", "max-width": "480px" },
      type: "screen"
    },
    "landscape-sm": {
      value: { "min-width": "481px", "max-width": "640px" },
      type: "screen"
    },
    "portrait-md": {
      value: { "min-width": "768px", "max-width": "1024px" },
      type: "screen"
    },
    "landscape-md": {
      value: { "min-width": "1025px", "max-width": "1280px" },
      type: "screen"
    }
    // Add more screens as needed
  };
  
  export default screens;
  