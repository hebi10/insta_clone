import styled from 'styled-components';

export const ExploreContainer = styled.div`
  max-width: 975px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  min-height: 100vh;
`;

export const ExploreHeader = styled.div`
  margin-bottom: 28px;
`;

export const ExploreTitle = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #262626;
  margin: 0;
  margin-bottom: 8px;
`;

export const ExploreSubtitle = styled.p`
  font-size: 14px;
  color: #8e8e8e;
  margin: 0;
`;

export const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3px;
  
  @media (max-width: 768px) {
    gap: 2px;
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
