import { FlexContainer } from "@/app/_styles/module.style";
import styled from "styled-components";


export const Legend = styled.legend`
  position: relative;
  aspect-ratio: 175/51;
  overflow: hidden;
  width: 175px;
  margin: 36px auto 12px;

  & img {
    object-fit: cover;
    object-position: 0px -52px;
  }
`;

export const InputEvent = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 6px;

  & span {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    color: rgb(${({ theme }) => theme.colors.igSecondaryText});
    font-size: 12px;
    font-weight: 400;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
  }

  & input:not(:placeholder-shown) {
    padding: 14px 0 2px 8px;
  }

  & input:not(:placeholder-shown) + span {
    top: 2px;
    transform: translateY(0);
    font-size: 10px;
  }
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6px;
  padding: 24px 0 0;
  font-size: 12px;
  &::placeholder {
    font-size: 12px;
  }

  & button {
    width: 100%;
    padding: 7px 0;
    margin: 14px 0 0;
    border-radius: 8px;
    background-color: rgb(${({ theme }) => theme.colors.igPrimaryButton});
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const LoginInput = styled.input`
  width: 100%;
  height: auto;
  padding: 8px 0 8px 8px;
  box-sizing: border-box;
  border: 1px solid rgb(${({ theme }) => theme.colors.igStroke});
  border-radius: 3px;
  background-color: rgb(${({ theme }) => theme.colors.igSecondaryBackground});
  font-size: 12px;
  color: #262626;

  &::placeholder {
    color: #8e8e8e;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const LineBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 22px 0;

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: rgb(${({ theme }) => theme.colors.igStroke});
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: -1;
  }

  & em {
    padding: 0 8px;
    background-color: #fff;
  }
`;

export const ForgotFlex = styled(FlexContainer)`
  & a {
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
`;

export const SignUpFlex = styled(FlexContainer)`
  & a {
    color: #007bff;
    font-weight: bold;
    margin-left: 4px;
    font-size: 14px;
  }

  & p {
    font-size: 14px;
  }
`;