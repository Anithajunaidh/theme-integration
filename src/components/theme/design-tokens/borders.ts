interface DesignToken<T> {
    value: T;
  }
  
  export interface IBorders {
    style: {
      solid: DesignToken<string>;
      dashed: DesignToken<string>;
      dotted: DesignToken<string>;
    };
    radius: {
      small: DesignToken<string>;
      medium: DesignToken<string>;
      large: DesignToken<string>;
    };
  }
  
  export interface IShadows {
    depth: {
      small: DesignToken<string>;
      medium: DesignToken<string>;
      large: DesignToken<string>;
    };
  }
  
  const borders: IBorders = {
    style: {
      solid: { value: 'solid' },
      dashed: { value: 'dashed' },
      dotted: { value: 'dotted' },
    },
    radius: {
      small: { value: '4px' },
      medium: { value: '8px' },
      large: { value: '12px' },
    },
  };
  
  const shadows: IShadows = {
    depth: {
      small: { value: '0 2px 4px rgba(0, 0, 0, 0.1)' },
      medium: { value: '0 4px 8px rgba(0, 0, 0, 0.1)' },
      large: { value: '0 8px 16px rgba(0, 0, 0, 0.1)' },
    },
  };
  
  export { borders, shadows };
  