import styled from 'styled-components';

// 릴스 페이지 전용 풀스크린 래퍼
export const ReelsPageWrapper = styled.div`
  /* 데스크톱/태블릿에서는 기본 레이아웃 유지 */
  width: 100%;
  height: 100dvh;
  
  /* 모바일에서는 완전한 전체화면 */
  @media ${props => props.theme.media.mobile} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: calc(100dvh - 50px);
    z-index: 999;
    background-color: #000;
    margin: 0;
    padding: 0;
  }
`;

export const ReelsContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #000;
  height: 100dvh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* 모바일에서는 전체 화면 사용 */
  @media ${props => props.theme.media.mobile} {
    max-width: 100%;
    width: 100vw;
    height: calc(100dvh - 50px);
    margin: 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

export const ReelItem = styled.div`
  position: relative;
  width: 100%;
  height: 100dvh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  
  /* 모바일에서는 뷰포트 전체 높이 사용 */
  @media ${props => props.theme.media.mobile} {
    height: calc(100dvh - 50px);
    width: 100vw;
  }
`;

export const ReelVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  /* 모바일에서는 전체 화면 비디오 */
  @media ${props => props.theme.media.mobile} {
    width: 100vw;
    height: calc(100dvh - 50px);
    object-fit: cover;
  }
`;

export const ReelOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
  
  /* 모바일에서는 하단 탭바 공간 확보 */
  @media ${props => props.theme.media.mobile} {
    padding: 16px 20px 20px 20px;
  }
`;

export const ReelHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

export const ReelAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

export const ReelUsername = styled.span`
  font-size: 14px;
  font-weight: 600;
  margin-right: 8px;
`;

export const FollowButton = styled.button`
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const ReelDescription = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
  
  .hashtag {
    color: #e1306c;
  }
`;

export const ReelSidebar = styled.div`
  position: absolute;
  right: 16px;
  bottom: 120px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  
  /* 모바일에서는 하단 탭바 고려 */
  @media ${props => props.theme.media.mobile} {
    bottom: 180px; /* 하단 탭바(50px) + 오버레이 공간 + 여유 공간 */
    right: 12px;
    gap: 12px;
  }
`;

export const SidebarButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  span {
    font-size: 12px;
    font-weight: 600;
  }
  
  &:hover {
    opacity: 0.8;
  }
  
  &.liked {
    color: #ff3040;
  }
`;

export const LoadingReel = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  font-size: 16px;
`;

export const ReelPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;
