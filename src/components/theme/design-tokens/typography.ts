// typography.ts

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

const typographyTokens: Record<string, Token> = {
  fontFamily: {
    value: "Roboto, sans-serif",
    type: "typography",
    original: {
      value: "Roboto, sans-serif",
      type: "typography"
    },
    name: "fontFamily",
    attributes: {
      category: "typography",
      type: "fontFamily"
    },
    path: [
      "typography",
      "fontFamily"
    ]
  },
  fontSize: {
    value: "16px",
    type: "typography",
    original: {
      value: "16px",
      type: "typography"
    },
    name: "fontSize",
    attributes: {
      category: "typography",
      type: "fontSize"
    },
    path: [
      "typography",
      "fontSize"
    ]
  },
  fontWeightNormal: {
    value: "400",
    type: "typography",
    original: {
      value: "400",
      type: "typography"
    },
    name: "fontWeightNormal",
    attributes: {
      category: "typography",
      type: "fontWeightNormal"
    },
    path: [
      "typography",
      "fontWeightNormal"
    ]
  },
  fontWeightBold: {
    value: "700",
    type: "typography",
    original: {
      value: "700",
      type: "typography"
    },
    name: "fontWeightBold",
    attributes: {
      category: "typography",
      type: "fontWeightBold"
    },
    path: [
      "typography",
      "fontWeightBold"
    ]
  },
  // Add more typography tokens as needed
};

export default typographyTokens;

// interface DesignToken<T> {
//     value: T;
//   }
  
//   interface TypographyTokens {
//     xxxs: DesignToken<ITypographyStyle>;
//     xxs: DesignToken<ITypographyStyle>;
//     xs: DesignToken<ITypographyStyle>;
//     s: DesignToken<ITypographyStyle>;
//     rgl: DesignToken<ITypographyStyle>;
//     md: DesignToken<ITypographyStyle>;
//     lg: DesignToken<ITypographyStyle>;
//     xl: DesignToken<ITypographyStyle>;
//     sb: DesignToken<ITypographyStyle>;
//     xsb: DesignToken<ITypographyStyle>;
//   }
  
//   interface ITypographyStyle {
//     fontSize: number;
//     fontWeight: number;
//     fontFamily: string;
//   }
  
//   const typographyTokens: TypographyTokens = {
//     xxxs: {
//       value: {
//         fontSize: 9,
//         fontWeight: 600,
//         fontFamily: "DMSans-Regular",
//       },
//     },
//     xxs: {
//       value: {
//         fontSize: 10,
//         fontWeight: 600,
//         fontFamily: "DMSans-Medium",
//       },
//     },
//     xs: {
//       value: {
//         fontSize: 12,
//         fontWeight: 600,
//         fontFamily: "DMSans-Medium",
//       },
//     },
//     xsb: {
//       value: {
//         fontSize: 12,
//         fontWeight: 600,
//         fontFamily: "DMSans-SemiBold",
//       },
//     },
//     s: {
//       value: {
//         fontSize: 14,
//         fontWeight: 600,
//         fontFamily: "DMSans-Medium",
//       },
//     },
//     sb: {
//       value: {
//         fontSize: 14,
//         fontWeight: 600,
//         fontFamily: "DMSans-SemiBold",
//       },
//     },
//     rgl: {
//       value: {
//         fontSize: 16,
//         fontWeight: 600,
//         fontFamily: "DMSans-SemiBold",
//       },
//     },
//     md: {
//       value: {
//         fontSize: 18,
//         fontWeight: 600,
//         fontFamily: "DMSans-SemiBold",
//       },
//     },
//     lg: {
//       value: {
//         fontSize: 20,
//         fontWeight: 600,
//         fontFamily: "DMSans-SemiBold",
//       },
//     },
//     xl: {
//       value: {
//         fontSize: 24,
//         fontWeight: 600,
//         fontFamily: "DMSans-SemiBold",
//       },
//     },
//   };
  
//   export default typographyTokens;
  