import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 975px;
  margin: 0 auto;
  padding: 30px 20px;
  background-color: #fff;
  min-height: 100dvh;
`;

export const ProfileHeader = styled.div`
  display: flex;
  margin-bottom: 44px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ProfileAvatar = styled.div`
  margin-right: 80px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 30px;
  }
`;

export const AvatarImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #dbdbdb;
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const ProfileInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ProfileNameRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

export const Username = styled.h1`
  font-size: 28px;
  font-weight: 300;
  color: #262626;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ProfileActions = styled.div`
  display: flex;
  gap: 8px;
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const ActionButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: 'primary' | 'secondary' }>`
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'primary' ? `
    background-color: #0095f6;
    color: #fff;
    border-color: #0095f6;
    
    &:hover {
      background-color: #1877f2;
      border-color: #1877f2;
    }
  ` : `
    background-color: #efefef;
    color: #262626;
    border-color: #dbdbdb;
    
    &:hover {
      background-color: #dbdbdb;
    }
  `}
`;

export const ProfileStats = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    justify-content: center;
    gap: 30px;
  }
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  
  &:hover {
    opacity: 0.7;
  }
`;

export const StatNumber = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;

export const StatLabel = styled.span`
  font-size: 16px;
  color: #262626;
`;

export const ProfileBio = styled.div`
  max-width: 350px;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const FullName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 4px;
`;

export const Bio = styled.div`
  font-size: 16px;
  color: #262626;
  line-height: 1.5;
  margin-bottom: 4px;
  white-space: pre-wrap;
`;

export const Website = styled.a`
  font-size: 16px;
  color: #00376b;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ProfileTabs = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #dbdbdb;
  margin-bottom: 28px;
`;

export const TabItem = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  background: none;
  border: none;
  padding: 16px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${props => props.active ? '#262626' : '#8e8e8e'};
  border-top: 1px solid ${props => props.active ? '#262626' : 'transparent'};
  margin-top: -1px;
  
  svg {
    width: 12px;
    height: 12px;
  }
  
  &:hover {
    color: #262626;
  }
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  
  @media (max-width: 768px) {
    gap: 3px;
  }
`;

export const PostItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  overflow: hidden;
  
  &:hover .overlay {
    opacity: 1;
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostOverlay = styled.div`
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

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #8e8e8e;
  
  .icon {
    font-size: 48px;
    margin-bottom: 16px;
  }
  
  h3 {
    font-size: 28px;
    font-weight: 300;
    margin: 0 0 16px 0;
    color: #262626;
  }
  
  p {
    font-size: 14px;
    margin: 0;
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
