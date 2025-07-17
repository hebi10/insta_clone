import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
  
  /* 모바일에서는 전체 너비 사용 */
  @media ${props => props.theme.media.mobile} {
    max-width: 100%;
  }
`;

export const NotificationsHeader = styled.div`
  padding: 20px 24px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
  
  /* 모바일에서 패딩 조정 */
  @media ${props => props.theme.media.mobile} {
    padding: 16px;
    top: 44px; /* 모바일 헤더 높이만큼 */
  }
`;

export const NotificationsTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #262626;
  margin: 0;
  
  /* 모바일에서 제목 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    font-size: 20px;
  }
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
  
  /* 모바일에서 패딩 조정 */
  @media ${props => props.theme.media.mobile} {
    padding: 12px 16px 6px;
    font-size: 15px;
  }
`;

export const NotificationItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isRead',
})<{ isRead?: boolean }>`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  background-color: ${props => props.isRead ? '#fff' : '#f8f9fa'};
  position: relative;
  
  &:hover {
    background-color: ${props => props.isRead ? '#fafafa' : '#f0f2f5'};
  }
  
  /* 모바일에서 패딩 조정 */
  @media ${props => props.theme.media.mobile} {
    padding: 12px 16px;
  }
`;

export const NotificationAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
  
  /* 모바일에서 아바타 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
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
  
  strong {
    font-weight: 600;
  }
  
  /* 모바일에서 폰트 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    font-size: 13px;
  }
`;

export const NotificationTime = styled.div`
  font-size: 12px;
  color: #8e8e8e;
  
  /* 모바일에서 폰트 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    font-size: 11px;
  }
`;

export const NotificationMedia = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 4px;
  margin-left: 12px;
  object-fit: cover;
  
  /* 모바일에서 미디어 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    width: 40px;
    height: 40px;
    margin-left: 8px;
  }
`;

/* 읽지 않은 알림 표시 점 */
export const UnreadIndicator = styled.div`
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background-color: #0095f6;
  border-radius: 50%;
  
  /* 모바일에서 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    left: 6px;
    width: 5px;
    height: 5px;
  }
`;

export const FollowButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isFollowing',
})<{ isFollowing?: boolean }>`
  background-color: ${props => props.isFollowing ? '#efefef' : '#0095f6'};
  color: ${props => props.isFollowing ? '#262626' : '#fff'};
  border: none;
  padding: 8px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 12px;
  
  &:hover {
    background-color: ${props => props.isFollowing ? '#dbdbdb' : '#1877f2'};
  }
  
  /* 모바일에서 버튼 크기 조정 */
  @media ${props => props.theme.media.mobile} {
    padding: 6px 16px;
    font-size: 13px;
    margin-left: 8px;
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
  
  div {
    font-size: 16px;
    color: #8e8e8e;
  }
  
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
  
  /* 모바일에서 패딩 조정 */
  @media ${props => props.theme.media.mobile} {
    padding: 40px 16px;
    
    div {
      font-size: 15px;
    }
  }
`;
