import styled from 'styled-components';

export const NotificationsContainer = styled.div`
  max-width: 640px;
  min-height: 100dvh;
  margin: 0 auto;
  background-color: #fff;

  @media ${props => props.theme.media.mobile} {
    max-width: 100%;
  }
`;

export const NotificationsHeader = styled.div`
  padding: 28px 24px 22px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;

  @media ${props => props.theme.media.mobile} {
    padding: 20px 16px 16px;
  }
`;

export const NotificationsTitle = styled.h1`
  margin: 0;
  color: #262626;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;

  @media ${props => props.theme.media.mobile} {
    font-size: 22px;
  }
`;

export const NotificationsList = styled.div`
  padding: 0 0 24px;
`;

export const NotificationSection = styled.section`
  padding: 0;

  & + & {
    border-top: 1px solid #efefef;
  }
`;

export const SectionHeader = styled.h2`
  margin: 0;
  padding: 18px 24px 8px;
  color: #262626;
  font-size: 16px;
  font-weight: 700;

  @media ${props => props.theme.media.mobile} {
    padding: 16px 16px 8px;
  }
`;

export const NotificationItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isRead',
})<{ isRead?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 68px;
  padding: 10px 24px;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.12s ease;

  &:hover {
    background-color: #fafafa;
  }

  @media ${props => props.theme.media.mobile} {
    padding: 10px 16px;
  }
`;

export const UnreadIndicator = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  width: 6px;
  height: 6px;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: #0095f6;

  @media ${props => props.theme.media.mobile} {
    left: 6px;
  }
`;

export const NotificationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const NotificationText = styled.div`
  color: #262626;
  font-size: 14px;
  line-height: 1.35;

  strong {
    margin-right: 2px;
    font-weight: 700;
  }
`;

export const NotificationTime = styled.div`
  margin-top: 3px;
  color: #8e8e8e;
  font-size: 13px;
`;

export const PostThumb = styled.div`
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #efefef;
`;

export const FollowButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'isFollowing',
})<{ isFollowing?: boolean }>`
  min-width: 86px;
  margin-left: 4px;
  padding: 7px 16px;
  border: 0;
  border-radius: 8px;
  background-color: ${props => props.isFollowing ? '#efefef' : '#0095f6'};
  color: ${props => props.isFollowing ? '#262626' : '#fff'};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.isFollowing ? '#dbdbdb' : '#1877f2'};
  }

  @media ${props => props.theme.media.mobile} {
    min-width: 78px;
    padding: 7px 12px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 220px;
  color: #8e8e8e;
  font-size: 14px;
`;

export const EmptyState = styled.div`
  padding: 64px 24px;
  text-align: center;
  color: #8e8e8e;
  font-size: 15px;
`;
