export const theme = {
  breakpoints: {
    xs: "320px",    // Extra small devices
    sm: "480px",    // Small devices
    md: "768px",    // Medium devices (tablets)
    lg: "1024px",   // Large devices
    xl: "1264px",   // Extra large devices
    xxl: "1400px",  // XXL devices
  },
  // 반응형 미디어 쿼리 헬퍼
  media: {
    xs: "(max-width: 319px)",
    sm: "(min-width: 320px) and (max-width: 479px)",
    md: "(min-width: 480px) and (max-width: 767px)",
    lg: "(min-width: 768px) and (max-width: 1023px)",
    xl: "(min-width: 1024px) and (max-width: 1263px)",
    xxl: "(min-width: 1264px)",
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
