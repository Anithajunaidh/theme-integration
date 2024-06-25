// tokenInterfaces.ts

export interface Token {
    value: string | Record<string, string>;
    type: string;
  }
  
  export interface Tokens {
    [key: string]: Token;
  }
  