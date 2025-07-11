// styles/ui.ts
import styled, { css } from 'styled-components';

// 상수
export const SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

const blockProps = [
  "flex",
  "direction",
  "justify",
  "align",
  "wrap",
  "p", "pt", "pb", "pl", "pr",
  "m", "mt", "mb", "ml", "mr",
  "width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight"
];

export interface UiProps {
  // spacing
  p?: number; pt?: number; pb?: number; pl?: number; pr?: number;
  m?: number; mt?: number; mb?: number; ml?: number; mr?: number;
  // flex
  flex?: boolean;
  direction?: 'row' | 'column';
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  align?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  // text
  textAlign?: 'left' | 'center' | 'right';
  bold?: boolean;
  normal?: boolean;
  size?: keyof typeof SIZES;
  // size
  w?: string | number;
  h?: string | number;
  // display
  block?: boolean;
  inlineBlock?: boolean;
  none?: boolean;
}

// 유틸리티
export const padding = css<UiProps>`
  ${({ p }) => p !== undefined && `padding: ${p}px;`}
  ${({ pt }) => pt !== undefined && `padding-top: ${pt}px;`}
  ${({ pb }) => pb !== undefined && `padding-bottom: ${pb}px;`}
  ${({ pl }) => pl !== undefined && `padding-left: ${pl}px;`}
  ${({ pr }) => pr !== undefined && `padding-right: ${pr}px;`}
`;

export const margin = css<UiProps>`
  ${({ m }) => m !== undefined && `margin: ${m}px;`}
  ${({ mt }) => mt !== undefined && `margin-top: ${mt}px;`}
  ${({ mb }) => mb !== undefined && `margin-bottom: ${mb}px;`}
  ${({ ml }) => ml !== undefined && `margin-left: ${ml}px;`}
  ${({ mr }) => mr !== undefined && `margin-right: ${mr}px;`}
`;

export const flexbox = css<UiProps>`
  ${({ flex }) => flex && `display: flex;`}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`;

export const textAlign = css<UiProps>`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
`;

export const fontWeight = css<UiProps>`
  ${({ bold }) => bold && 'font-weight: bold;'}
  ${({ normal }) => normal && 'font-weight: normal;'}
`;

export const fontSize = css<UiProps>`
  ${({ size }) => size && `font-size: ${SIZES[size] ?? SIZES.medium}px;`}
`;

export const size = css<UiProps>`
  ${({ w }) =>
    w !== undefined
      ? `width: ${typeof w === 'number' ? `${w}px` : w};`
      : ''}
  ${({ h }) =>
    h !== undefined
      ? `height: ${typeof h === 'number' ? `${h}px` : h};`
      : ''}
`;

export const display = css<UiProps>`
  ${({ block }) => block && 'display: block;'}
  ${({ inlineBlock }) => inlineBlock && 'display: inline-block;'}
  ${({ none }) => none && 'display: none;'}
`;

// 3. styled-components
export const Button = styled.button<UiProps>`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
  ${padding}
  ${margin}
  ${fontSize}
  ${fontWeight}
`;

export const Input = styled.input<UiProps>`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
  ${padding}
  ${margin}
  ${fontSize}
  ${fontWeight}
`;

export const FlexContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !blockProps.includes(prop as string)
})<UiProps>`
  ${flexbox}
  ${padding}
  ${margin}
  ${size}
`;

