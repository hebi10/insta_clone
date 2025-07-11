import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      igStroke: string;
      igSecondaryBackground: string;
      igPrimaryButton: string;
      igSecondaryText: string;
    };
    fontSize: {
      base: string;
      lg: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
