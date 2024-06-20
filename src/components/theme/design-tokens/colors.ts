interface DesignToken<T> {
    value: T;
  }
  
  export interface IColorPalette {
    primary: DesignToken<string>;
    secondary: DesignToken<string>;
    accent: DesignToken<string>;
    background: {
      primary: DesignToken<string>;
      secondary: DesignToken<string>;
      tertiary: DesignToken<string>;
    };
    text: {
      primary: DesignToken<string>;
      secondary: DesignToken<string>;
      tertiary: DesignToken<string>;
    };
  }
  
  const colorPalette: IColorPalette = {
    primary: { value: '#6200EE' },
    secondary: { value: '#03DAC6' },
    accent: { value: '#FF4081' },
    background: {
      primary: { value: '#FFFFFF' },
      secondary: { value: '#F0F0F0' },
      tertiary: { value: '#E0E0E0' },
    },
    text: {
      primary: { value: '#000000' },
      secondary: { value: '#666666' },
      tertiary: { value: '#CCCCCC' },
    },
  };
  
  export default colorPalette;
  