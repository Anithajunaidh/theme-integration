interface DesignToken<T> {
    value: T;
  }
  
  export interface IBreakpoints {
    small: DesignToken<string>;
    medium: DesignToken<string>;
    large: DesignToken<string>;
    xLarge: DesignToken<string>;
  }
  
  const breakpoints: IBreakpoints = {
    small: { value: '576px' },
    medium: { value: '768px' },
    large: { value: '992px' },
    xLarge: { value: '1200px' },
  };
  
  export default breakpoints;
  