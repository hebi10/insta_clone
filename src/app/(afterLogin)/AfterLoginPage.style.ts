import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100dvh;
  box-sizing: border-box;
  
  /* 모바일에서는 전체 너비 사용 */
  @media ${props => props.theme.media.mobile} {
    padding: 0;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  
  /* 데스크톱에서만 사이드바 여백 */
  @media ${props => props.theme.media.desktop} {
    padding-left: 220px;
  }
  
  /* 태블릿에서는 좁은 사이드바 */
  @media ${props => props.theme.media.tablet} {
    padding-left: 72px;
  }
  
  /* 모바일에서는 사이드바 여백 없음 + 하단 탭바 여백 */
  @media ${props => props.theme.media.mobile} {
    padding-left: 0;
    padding-bottom: 60px; /* 하단 탭바 공간 확보 */
    width: 100%;
    max-width: 100%;
  }
`;

export const LeftArea = styled.div`
  width: 220px;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  
  /* 태블릿 사이즈 */
  @media ${props => props.theme.media.tablet} {
    width: 71px;
  }

  /* 태블릿 + 모바일 (1023px 이하 전체) */
  @media (max-width: 1023px) {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 64px;
  width: 100%;
  padding: 0 20px;
  
  /* 태블릿에서는 간격 줄이기 */
  @media ${props => props.theme.media.tablet} {
    gap: 32px;
    padding: 0 16px;
  }
  
  /* 모바일에서는 단일 컬럼 */
  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
    gap: 0;
    padding: 0;
  }
`;

export const LeftList = styled.div`
  flex: 1;
  padding: 20px 0;
  box-sizing: border-box;
  min-height: 100dvh;
  max-width: ${props => props.theme.instagram.postWidth};
  
  /* 모바일에서는 전체 너비 */
  @media ${props => props.theme.media.mobile} {
    max-width: 100%;
    padding: 0;
    min-height: auto;
  }
  
  /* 태블릿에서 패딩 조정 */
  @media ${props => props.theme.media.tablet} {
    padding: 16px 0;
  }
`;

export const RightArea = styled.div`
  width: ${props => props.theme.instagram.sidebarWidth};
  margin-left: 20px;
  padding: 20px 0;
  
  /* 태블릿 이하에서는 숨김 */
  @media ${props => props.theme.media.tablet} {
    display: none;
  }
  
  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`;