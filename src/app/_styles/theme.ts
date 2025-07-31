export const theme = {
  breakpoints: {
    xs: "320px",    // Extra small devices
    md: "768px",    // Medium devices (tablets)
    lg: "1024px",   // Large devices
  },
  // 반응형 미디어 쿼리 헬퍼
  media: {
    mobile: "(max-width: 767px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    desktop: "(min-width: 1024px)",
  },
  colors: {
    // border colors
    igStroke: "219, 219, 219",

    // main colors
    igSecondaryBackground: "250, 250, 250",
    igPrimaryButton: "0, 149, 246",

    // font colors
    igSecondaryText: "115, 115, 115",
    
    // Instagram colors
    igBlack: "0, 0, 0",
    igWhite: "255, 255, 255",
    igGray: "142, 142, 142",
    igLightGray: "239, 239, 239",
    igBlue: "0, 149, 246",
    igRed: "237, 73, 86",
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  // Instagram specific measurements
  instagram: {
    maxWidth: "935px",
    sidebarWidth: "293px",
    postWidth: "470px",
    storyHeight: "118px",
    headerHeight: "54px",
    mobileHeaderHeight: "44px",
  }
};
