import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  box-sizing: border-box;
  
  /* 태블릿 이하에서는 사이드바 숨기기 */
  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
  }
`;

export const LeftArea = styled.div`
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  
  /* 모바일에서는 하단 탭바로 변경 */
  @media ${props => props.theme.media.mobile} {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    height: 50px;
    width: 100%;
    z-index: 1000;
    background-color: transparent; /* LeftSide 컴포넌트에서 관리 */
    border: none; /* LeftSide 컴포넌트에서 관리 */
  }
  
  /* 태블릿에서는 좁은 사이드바 */
  @media ${props => props.theme.media.tablet} {
    width: 72px;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  margin-left: 220px; /* 기본 LeftSide 너비 */
  transition: margin-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* 검색 모드일 때는 좁아진 사이드바 너비로 조정 */
  .search-mode & {
    margin-left: 72px;
    
    @media ${props => props.theme.media.tablet} {
      margin-left: 72px;
    }
    
    @media ${props => props.theme.media.mobile} {
      margin-left: 0;
    }
  }
  
  /* 태블릿에서는 좁은 사이드바 */
  @media ${props => props.theme.media.tablet} {
    margin-left: 72px;
  }
  
  /* 모바일에서는 사이드바 없음, 하단 여백 추가 */
  @media ${props => props.theme.media.mobile} {
    margin-left: 0;
    padding-bottom: 60px; /* 하단 탭바 공간 */
  }
`;

/* 모바일 헤더 컴포넌트 */
export const MobileHeader = styled.header`
  display: none;
  
  @media ${props => props.theme.media.mobile} {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${props => props.theme.instagram.mobileHeaderHeight};
    background-color: rgb(${props => props.theme.colors.igWhite});
    border-bottom: 1px solid rgb(${props => props.theme.colors.igStroke});
    z-index: 50;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
`;

/* 모바일 컨텐츠 영역 */
export const MobileContent = styled.div`
  @media ${props => props.theme.media.mobile} {
    padding-top: ${props => props.theme.instagram.mobileHeaderHeight};
    padding-bottom: 60px;
  }
`;