// app/global.style.ts
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a,img{
    display: block;
    max-width: 100%;
  }

  a{
    text-decoration: none;
    color: #000;
  }

  img{
    object-fit: contain;
  }

  button{
    padding: 0;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
  }

  strong, i{
    display: block;
  }

  input:focus {
    outline: none;
  }

  /* 반응형 기본 설정 */
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background-color: rgb(${props => props.theme?.colors?.igWhite || '255, 255, 255'});
    color: rgb(${props => props.theme?.colors?.igBlack || '0, 0, 0'});
    line-height: 1.4;
    
    /* 모바일에서 가로 스크롤 방지 */
    overflow-x: hidden;
  }

  /* 컨테이너 반응형 설정 */
  .container {
    width: 100%;
    max-width: ${props => props.theme?.instagram?.maxWidth || '935px'};
    margin: 0 auto;
    padding: 0 16px;
    
    @media (max-width: 768px) {
      padding: 0 8px;
    }
  }

  /* 텍스트 반응형 */
  .responsive-text {
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;

export default GlobalStyle;