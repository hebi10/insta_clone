import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
`;

export const NotificationsHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
`;

export const NotificationsTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #262626;
  margin: 0;
`;

export const NotificationsList = styled.div`
  padding: 0;
`;

export const NotificationSection = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`;

export const SectionHeader = styled.div`
  padding: 16px 24px 8px;
  font-size: 16px;
  font-weight: 600;
  color: #262626;
`;

export const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  
  &:hover {
    background-color: #fafafa;
  }
  
  &.unread {
    background-color: #f8f9fa;
    
    &:hover {
      background-color: #f0f2f5;
    }
  }
`;

export const NotificationAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const NotificationText = styled.div`
  font-size: 14px;
  color: #262626;
  line-height: 1.4;
  margin-bottom: 2px;
  
  .username {
    font-weight: 600;
  }
  
  .action {
    color: #8e8e8e;
  }
`;

export const NotificationTime = styled.div`
  font-size: 12px;
  color: #8e8e8e;
`;

export const NotificationMedia = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  margin-left: 12px;
  object-fit: cover;
`;

export const FollowButton = styled.button`
  background-color: #0095f6;
  color: #fff;
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 12px;
  
  &:hover {
    background-color: #1877f2;
  }
  
  &.following {
    background-color: #efefef;
    color: #262626;
    
    &:hover {
      background-color: #dbdbdb;
    }
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

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 24px;
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

export const UnreadIndicator = styled.div`
  width: 8px;
  height: 8px;
  background-color: #0095f6;
  border-radius: 50%;
  margin-left: 8px;
`;
