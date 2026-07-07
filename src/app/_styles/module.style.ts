"use client";

import styled, { css } from "styled-components";

const blockProps = ["flex", "direction", "justify", "align", "wrap", "pt", "pb", "mt"];

interface FlexProps {
  flex?: boolean;
  direction?: "row" | "column";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  pt?: number;
  pb?: number;
  mt?: number;
}

const flexbox = css<FlexProps>`
  ${({ flex }) => flex && "display: flex;"}
  ${({ direction }) => direction && `flex-direction: ${direction};`}
  ${({ justify }) => justify && `justify-content: ${justify};`}
  ${({ align }) => align && `align-items: ${align};`}
  ${({ wrap }) => wrap && `flex-wrap: ${wrap};`}
`;

const spacing = css<FlexProps>`
  ${({ pt }) => pt !== undefined && `padding-top: ${pt}px;`}
  ${({ pb }) => pb !== undefined && `padding-bottom: ${pb}px;`}
  ${({ mt }) => mt !== undefined && `margin-top: ${mt}px;`}
`;

export const FlexContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !blockProps.includes(prop as string),
})<FlexProps>`
  ${flexbox}
  ${spacing}
`;
