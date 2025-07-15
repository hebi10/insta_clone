import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export const LeftArea = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  /* 너비는 LeftSide 컴포넌트에서 관리 */
`;

export const ContentArea = styled.div`
  flex: 1;
  margin-left: 220px; /* 기본 LeftSide 너비 */
  transition: margin-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* 검색 모드일 때는 좁아진 사이드바 너비로 조정 */
  .search-mode & {
    margin-left: 72px;
  }
`;