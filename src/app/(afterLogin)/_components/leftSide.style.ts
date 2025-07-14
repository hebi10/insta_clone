import styled from 'styled-components';

export const Nav = styled.nav`
  width: 220px;
  padding: 24px 16px;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const NavItem = styled.li`
  font-size: 16px;
  cursor: pointer;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;
