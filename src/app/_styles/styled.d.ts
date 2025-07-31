import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xs: string;
      md: string;
      lg: string;
    };
    media: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      igStroke: string;
      igSecondaryBackground: string;
      igPrimaryButton: string;
      igSecondaryText: string;
      igBlack: string;
      igWhite: string;
      igGray: string;
      igLightGray: string;
      igBlue: string;
      igRed: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    instagram: {
      maxWidth: string;
      sidebarWidth: string;
      postWidth: string;
      storyHeight: string;
      headerHeight: string;
      mobileHeaderHeight: string;
    };
  }
}
