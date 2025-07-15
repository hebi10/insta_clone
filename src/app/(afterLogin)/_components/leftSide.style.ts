import styled from 'styled-components';

export const NavWrap = styled.nav<{ isSearchMode?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px 12px 20px 12px;
  height: 100vh;
  box-sizing: border-box;
  background-color: #ffffff;
  border-right: 1px solid #dbdbdb;
  width: ${props => props.isSearchMode ? '72px' : '220px'};
  transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;
`;

export const Logo = styled.div<{ isSearchMode?: boolean }>`
  padding: 12px 12px 24px 12px;
  margin-bottom: 19px;
  
  img {
    height: 29px;
    width: auto;
  }
  
  /* 텍스트 로고 */
  font-family: 'Lobster Two', cursive;
  font-size: ${props => props.isSearchMode ? '0px' : '24px'};
  font-weight: 400;
  color: #262626;
  cursor: pointer;
  transition: font-size 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li<{ isSearchMode?: boolean }>`
  margin: 0;
  
  a, button {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 12px;
    font-size: 16px;
    font-weight: 400;
    color: #262626;
    text-decoration: none;
    border-radius: 8px;
    transition: background-color 0.2s ease;
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
    
    &:hover {
      background-color: #fafafa;
    }
    
    svg {
      width: 24px;
      height: 24px;
      stroke-width: 1.5;
      flex-shrink: 0;
    }
    
    span {
      font-size: 16px;
      color: #262626;
      opacity: ${props => props.isSearchMode ? '0' : '1'};
      transition: opacity 0.2s ease;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  
  &.active a {
    font-weight: 700;
    
    svg {
      stroke-width: 2.5;
    }
  }
`;

export const ProfileNavItem = styled(NavItem)`
  margin-top: auto;
  margin-bottom: 0;
  
  button {
    padding: 12px 12px;
    
    &:hover {
      background-color: #fafafa;
    }
  }
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
`;

export const MenuToggle = styled.div<{ isSearchMode?: boolean }>`
  padding: 12px 12px;
  margin-top: 8px;
  
  button {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 0;
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
    font-size: 16px;
    color: #262626;
    border-radius: 8px;
    
    &:hover {
      background-color: #fafafa;
    }
    
    svg {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }
    
    span {
      opacity: ${props => props.isSearchMode ? '0' : '1'};
      transition: opacity 0.2s ease;
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;
