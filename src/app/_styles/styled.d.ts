import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
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
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    instagram: {
      maxWidth: string;
      sidebarWidth: string;
      narrowSidebar: string;
      postWidth: string;
      headerHeight: string;
      mobileHeaderHeight: string;
      mobileTabHeight: string;
    };
  }
}
