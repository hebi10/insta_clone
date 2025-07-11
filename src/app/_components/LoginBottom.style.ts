import { FlexContainer } from "@/app/_styles/module.style";
import styled from "styled-components";

export const BottomWrap = styled(FlexContainer)`
  height: 12dvh;
  gap: 16px 0;
  font-size: 12px;
  color: rgb(${({ theme }) => theme.colors.igSecondaryText});
`;

export const BottomFlexContainer = styled(FlexContainer)`
  gap: 16px;
  & a {
    font-size: 12px;
    color: rgb(${({ theme }) => theme.colors.igSecondaryText});
  }
`;