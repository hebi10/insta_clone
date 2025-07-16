import styled from 'styled-components';

export const ReelsContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: #000;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ReelItem = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
`;

export const ReelVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ReelOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: #fff;
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
  height: 100vh;
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
