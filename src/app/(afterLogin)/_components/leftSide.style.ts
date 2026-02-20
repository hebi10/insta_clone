import styled from 'styled-components';

export const NavWrap = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSearchMode',
})<{ isSearchMode?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 32px 12px 20px 12px;
  height: 100dvh;
  box-sizing: border-box;
  background-color: #ffffff;
  border-right: 1px solid #dbdbdb;
  width: ${props => props.isSearchMode ? '72px' : '220px'};
  transition: width 0.3s ease;
  overflow: hidden;
  
  /* 태블릿에서는 항상 좁은 사이드바 */
  @media ${props => props.theme.media.tablet} {
    width: 72px;
    padding: 32px 6px 20px 6px;
  }
  
  /* 모바일에서는 하단 탭바로 변경 */
  @media ${props => props.theme.media.mobile} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    height: 50px;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    border-right: none;
    border-top: 1px solid #dbdbdb;
    background-color: white;
    z-index: 1000;
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.05);
  }
`;

export const Logo = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSearchMode',
})<{ isSearchMode?: boolean }>`
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
  
  /* 태블릿에서는 로고 숨김 */
  @media ${props => props.theme.media.tablet} {
    font-size: 0px;
    padding: 12px 6px 24px 6px;
  }
  
  /* 모바일에서는 로고 완전 숨김 */
  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-grow: 1;
  list-style: none;
  padding: 0;
  margin: 0;
  
  /* 모바일에서는 가로 배치 */
  @media ${props => props.theme.media.mobile} {
    flex-direction: row !important;
    justify-content: space-around !important;
    align-items: center !important;
    gap: 0 !important;
    flex-grow: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
  }
`;

export const NavItem = styled.li.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSearchMode',
})<{ isSearchMode?: boolean }>`
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
      
      /* 모바일에서는 조금 더 크게 */
      @media ${props => props.theme.media.mobile} {
        width: 26px;
        height: 26px;
      }
    }
    
    span {
      font-size: 16px;
      color: #262626;
      opacity: ${props => props.isSearchMode ? '0' : '1'};
      transition: opacity 0.2s ease;
      white-space: nowrap;
      overflow: hidden;
      
      /* 태블릿에서는 텍스트 숨김 */
      @media ${props => props.theme.media.tablet} {
        display: none;
      }
      
      /* 모바일에서는 텍스트 숨김 */
      @media ${props => props.theme.media.mobile} {
        display: none;
      }
    }
    
    /* 태블릿 및 모바일에서 아이콘만 표시 */
    @media ${props => props.theme.media.tablet} {
      gap: 0;
      padding: 12px 6px;
      justify-content: center;
    }
    
    @media ${props => props.theme.media.mobile} {
      gap: 0;
      padding: 0;
      justify-content: center;
      min-width: auto;
      height: 50px;
      width: auto;
      flex: 1;
      
      &:hover {
        background-color: transparent;
      }
    }
  }
  
  &.active a {
    font-weight: 700;
    
    svg {
      stroke-width: 2.5;
    }
  }
  
  /* 모바일에서 특정 네비게이션 아이템 숨김 */
  &.hide-mobile {
    @media ${props => props.theme.media.mobile} {
      display: none;
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
    
    @media ${props => props.theme.media.tablet} {
      padding: 12px 6px;
      justify-content: center;
    }
    
    @media ${props => props.theme.media.mobile} {
      padding: 8px;
      margin: 0;
      
      &:hover {
        background-color: transparent;
      }
    }
  }
  
  /* 모바일에서는 자동 마진 제거 */
  @media ${props => props.theme.media.mobile} {
    margin-top: 0;
  }
`;

export const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  
  /* 모바일에서는 조금 더 크게 */
  @media ${props => props.theme.media.mobile} {
    width: 28px;
    height: 28px;
  }
`;

export const MenuToggle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isSearchMode',
})<{ isSearchMode?: boolean }>`
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
      
      @media ${props => props.theme.media.tablet} {
        opacity: 0;
      }
      
      @media ${props => props.theme.media.mobile} {
        display: none;
      }
    }
    
    @media ${props => props.theme.media.tablet} {
      gap: 0;
      padding: 12px 6px;
      justify-content: center;
    }
    
    @media ${props => props.theme.media.mobile} {
      gap: 0;
      padding: 8px;
      justify-content: center;
      
      &:hover {
        background-color: transparent;
      }
    }
  }
  
  /* 모바일에서는 메뉴 숨김 */
  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`;
