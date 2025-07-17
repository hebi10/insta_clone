import styled from 'styled-components';

export const ExploreContainer = styled.div`
  max-width: 975px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  min-height: 100dvh;
  
  /* 태블릿에서 패딩 조정 */
  @media ${props => props.theme.media.tablet} {
    padding: 20px 16px;
    max-width: 100%;
  }
  
  /* 모바일에서는 전체 너비 사용 */
  @media ${props => props.theme.media.mobile} {
    padding: 16px 4px;
    max-width: 100%;
    min-height: calc(100dvh - 44px); /* 모바일 헤더 제외 */
  }
`;

export const ExploreHeader = styled.div`
  margin-bottom: 28px;
  
  /* 모바일에서 마진 조정 */
  @media ${props => props.theme.media.mobile} {
    margin-bottom: 20px;
    padding: 0 12px;
  }
`;

export const ExploreTitle = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #262626;
  margin: 0;
  margin-bottom: 8px;
  
  /* 모바일에서 제목 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    font-size: 20px;
    margin-bottom: 6px;
  }
`;

export const ExploreSubtitle = styled.p`
  font-size: 14px;
  color: #8e8e8e;
  margin: 0;
  
  /* 모바일에서 폰트 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    font-size: 13px;
  }
`;

export const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  
  /* 태블릿에서 간격 조정 */
  @media ${props => props.theme.media.tablet} {
    gap: 2px;
  }
  
  /* 모바일에서 간격 최소화 */
  @media ${props => props.theme.media.mobile} {
    gap: 1px;
  }
`;

export const ExploreItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  overflow: hidden;
  
  &:hover .overlay {
    opacity: 1;
  }
  
  /* 모바일에서 호버 효과 제거 */
  @media ${props => props.theme.media.mobile} {
    &:hover .overlay {
      opacity: 0;
    }
    
    &:active .overlay {
      opacity: 1;
    }
  }
`;

export const ExploreImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const ExploreOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
  gap: 16px;
`;

export const OverlayStats = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  gap: 4px;
  
  svg {
    width: 19px;
    height: 19px;
    fill: currentColor;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 14px;
  color: #8e8e8e;
`;

export const NoPostsMessage = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #8e8e8e;
  
  h3 {
    font-size: 22px;
    font-weight: 300;
    margin: 0 0 16px 0;
    color: #262626;
  }
  
  p {
    font-size: 14px;
    margin: 0;
  }
`;
