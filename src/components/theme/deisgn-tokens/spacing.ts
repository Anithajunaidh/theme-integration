export interface DesignToken<T> {
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

const spacingTokens: ISpacing = {
    spaceXs: { value: 0.3125 }, // converted to rem
    spaceS: { value: 0.625 },
    spaceM: { value: 0.9375 },
    spaceL: { value: 1.25 },
    spaceXl: { value: 1.5625 },
    spaceXxl: { value: 1.875 },
    space3xl: { value: 2.1875 },
};

export default spacingTokens;
