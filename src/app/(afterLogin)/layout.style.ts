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
  width: 220px;
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
    background-color: transparent;
    border: none;
  }
  
  /* 태블릿에서는 좁은 사이드바 */
  @media ${props => props.theme.media.tablet} {
    width: 72px;
  }
`;

export const ContentArea = styled.div`
  flex: 1;
  margin-left: 220px;
  transition: margin-left 0.3s ease;
  min-height: 100dvh;
  
  .search-mode & {
    margin-left: 72px;
  }
  
  @media ${props => props.theme.media.tablet} {
    margin-left: 72px;
  }
  
  @media ${props => props.theme.media.mobile} {
    margin-left: 0;
    padding-top: ${props => props.theme.instagram.mobileHeaderHeight};
    padding-bottom: 55px;
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