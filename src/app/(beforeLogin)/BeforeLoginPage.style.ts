import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100dvh;
  max-width: 935px;
  margin: 0 auto;

  & > .login_form {
    width: 40%;
    padding: 10px 40px;
    box-sizing: border-box;
  }
`;

export const ImageWrap = styled.div`
  width: 60%;
  position: relative;
  aspect-ratio: 27/22;

  & img {
    box-sizing: border-box;
    padding-right: 55px;
    width: 100%;
    object-fit: contain;
  }
`;

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
  padding: 9px 0 7px 8px;
  box-sizing: border-box;
  border: 1px solid rgb(${({ theme }) => theme.colors.igStroke});
  border-radius: 3px;
  background-color: rgb(${({ theme }) => theme.colors.igSecondaryBackground});
  font-size: ${({ theme }) => theme.fontSize.base};
  color: #262626;

  &::placeholder {
    color: #8e8e8e;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;