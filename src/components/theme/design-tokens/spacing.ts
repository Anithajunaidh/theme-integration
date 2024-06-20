interface DesignToken<T> {
    value: T;
  }
  
  export interface ISpacing {
    spaceXs: DesignToken<number>;
    spaceS: DesignToken<number>;
    spaceM: DesignToken<number>;
    spaceL: DesignToken<number>;
    spaceXl: DesignToken<number>;
    spaceXxl: DesignToken<number>;
    space3xl: DesignToken<number>;
  }
  
  export interface ISizes {
    regular: DesignToken<number>;
    xLarge: DesignToken<number>;
    large: DesignToken<number>;
    mediumX: DesignToken<number>;
    normal: DesignToken<number>;
    medium: DesignToken<number>;
  }
  
  export const spacingTokens: ISpacing = {
    spaceXs: { value: 5 },
    spaceS: { value: 10 },
    spaceM: { value: 15 },
    spaceL: { value: 20 },
    spaceXl: { value: 25 },
    spaceXxl: { value: 30 },
    space3xl: { value: 35 },
  };
  
  export const iconSize: ISizes = {
    regular: { value: 24 },
    xLarge: { value: 45 },
    large: { value: 40 },
    mediumX: { value: 25 },
    normal: { value: 14 },
    medium: { value: 16 },
  };
  
  export const calculateSize = (spacingValue: number): number => {
    const size = spacingValue * 10; // Multiply the spacing value by a factor
    return size;
  };
  
  const designTokens = {
    spacingTokens,
    iconSize,
    calculateSize,
  };
  
  export default spacingTokens;
  