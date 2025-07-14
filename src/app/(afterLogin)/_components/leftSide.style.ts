import styled from 'styled-components';

export const NavWrap = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  height: 100%;
  box-sizing: border-box;
`;

export const Logo = styled.h1`
  font-family: 'Segoe UI', sans-serif;
  font-size: 24px;
  margin-bottom: 24px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-grow: 1;
`;

export const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    color: inherit;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &:last-child {
    margin-top: auto;
  }
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
