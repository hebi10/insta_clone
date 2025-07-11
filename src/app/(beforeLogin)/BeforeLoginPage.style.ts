import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88dvh;
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