import styled from 'styled-components';

export const NavWrap = styled.nav`
  padding: 20px 12px;
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
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;
