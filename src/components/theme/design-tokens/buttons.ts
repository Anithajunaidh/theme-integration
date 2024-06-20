interface DesignToken<T> {
    value: T;
  }
  
  export interface IButtonStyles {
    primary: {
      backgroundColor: DesignToken<string>;
      color: DesignToken<string>;
    };
    secondary: {
      backgroundColor: DesignToken<string>;
      color: DesignToken<string>;
    };
    tertiary: {
      backgroundColor: DesignToken<string>;
      color: DesignToken<string>;
    };
  }
  
  export interface IButtonSizes {
    small: DesignToken<string>;
    medium: DesignToken<string>;
    large: DesignToken<string>;
  }
  
  export interface IButtonStates {
    normal: {
      backgroundColor: DesignToken<string>;
      color: DesignToken<string>;
    };
    hover: {
      backgroundColor: DesignToken<string>;
      color: DesignToken<string>;
    };
    active: {
      backgroundColor: DesignToken<string>;
      color: DesignToken<string>;
    };
    disabled: {
      backgroundColor: DesignToken<string>;
      color: DesignToken<string>;
    };
  }
  
  const buttonStyles: IButtonStyles = {
    primary: {
      backgroundColor: { value: '#6200EE' },
      color: { value: '#FFFFFF' },
    },
    secondary: {
      backgroundColor: { value: '#03DAC6' },
      color: { value: '#000000' },
    },
    tertiary: {
      backgroundColor: { value: '#FF4081' },
      color: { value: '#FFFFFF' },
    },
  };
  
  const buttonSizes: IButtonSizes = {
    small: { value: '100px' },
    medium: { value: '120px' },
    large: { value: '140px' },
  };
  
  const buttonStates: IButtonStates = {
    normal: {
      backgroundColor: { value: '#FFFFFF' },
      color: { value: '#000000' },
    },
    hover: {
      backgroundColor: { value: '#F0F0F0' },
      color: { value: '#000000' },
    },
    active: {
      backgroundColor: { value: '#CCCCCC' },
      color: { value: '#FFFFFF' },
    },
    disabled: {
      backgroundColor: { value: '#E0E0E0' },
      color: { value: '#666666' },
    },
  };
  
  export { buttonStyles, buttonSizes, buttonStates };
  