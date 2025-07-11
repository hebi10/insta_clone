import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
  background: #fff;
  position: relative;
`;

export const Inner = styled.div`
  max-width: 975px;
  margin: 0 auto;
  height: 6dvh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
`;

export const Logo = styled.div`
  font-family: 'Grand Hotel', cursive;
  font-size: 32px;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: #262626;
  margin-top: 8px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const LoginButton = styled.button`
  background: #0095f6;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 6px 18px;
  font-size: 15px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background: #1877f2;
  }
`;

export const JoinLink = styled.a`
  color: #0095f6;
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  margin-left: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  aspect-ratio: 175/51;
  overflow: hidden;
  width: 175px;

  & img {
    object-fit: cover;
    object-position: 0px -52px;
  }
`;