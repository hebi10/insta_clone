// app/global.style.ts
import { createGlobalStyle } from 'styled-components';

const FontsStyle = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  body {
    font-family: 'Noto Sans', sans-serif;
  }
`;

export default FontsStyle;