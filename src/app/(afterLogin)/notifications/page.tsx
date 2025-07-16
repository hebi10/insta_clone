'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/app/api/query';
import {
  NotificationsContainer,
  NotificationsHeader,
  NotificationsTitle,
  NotificationsList,
  NotificationSection,
  SectionHeader,
  NotificationItem,
  NotificationAvatar,
  NotificationContent,
  NotificationText,
  NotificationTime,
  NotificationMedia,
  FollowButton,
  LoadingContainer,
  EmptyState,
  UnreadIndicator,
} from './page.style';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  username: string;
  avatar: string;
  timestamp: Date;
  isRead: boolean;
  postImage?: string;
  text?: string;
  isFollowing?: boolean;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const { data: fetchedNotifications = [], isLoading } = useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
  });

  useEffect(() => {
    if (fetchedNotifications.length > 0) {
      setNotifications(fetchedNotifications);
    }
  }, [fetchedNotifications]);

  const displayNotifications = notifications.length > 0 ? notifications : fetchedNotifications;

  const getNotificationText = (notification: Notification) => {
    switch (notification.type) {
      case 'like':
        return `${notification.username}님이 회원님의 게시물을 좋아합니다.`;
      case 'comment':
        return `${notification.username}님이 댓글을 남겼습니다: "${notification.text}"`;
      case 'follow':
        return `${notification.username}님이 회원님을 팔로우하기 시작했습니다.`;
      case 'mention':
        return `${notification.username}님이 회원님을 언급했습니다.`;
      default:
        return '';
    }
  };

  const formatTime = (date: Date | string) => {
    const dateObj = date instanceof Date ? date : new Date(date);
    const now = new Date();
    const diff = now.getTime() - dateObj.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return '방금';
    if (minutes < 60) return `${minutes}분`;
    if (hours < 24) return `${hours}시간`;
    return `${days}일`;
  };

  const handleFollow = (notificationId: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, isFollowing: !notification.isFollowing }
          : notification
      )
    );
  };

  const groupNotificationsByDate = (notifications: Notification[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    const thisWeek = new Date(today);
    thisWeek.setDate(thisWeek.getDate() - 7);

    const todayNotifications = notifications.filter(n => {
      const notificationDate = n.timestamp instanceof Date ? n.timestamp : new Date(n.timestamp);
      return notificationDate >= today;
    });
    const yesterdayNotifications = notifications.filter(n => {
      const notificationDate = n.timestamp instanceof Date ? n.timestamp : new Date(n.timestamp);
      return notificationDate >= yesterday && notificationDate < today;
    });
    const thisWeekNotifications = notifications.filter(n => {
      const notificationDate = n.timestamp instanceof Date ? n.timestamp : new Date(n.timestamp);
      return notificationDate >= thisWeek && notificationDate < yesterday;
    });
    const olderNotifications = notifications.filter(n => {
      const notificationDate = n.timestamp instanceof Date ? n.timestamp : new Date(n.timestamp);
      return notificationDate < thisWeek;
    });

    return { todayNotifications, yesterdayNotifications, thisWeekNotifications, olderNotifications };
  };

  if (isLoading) {
    return (
      <NotificationsContainer>
        <NotificationsHeader>
          <NotificationsTitle>알림</NotificationsTitle>
        </NotificationsHeader>
        <LoadingContainer>알림을 불러오는 중...</LoadingContainer>
      </NotificationsContainer>
    );
  }

  if (displayNotifications.length === 0) {
    return (
      <NotificationsContainer>
        <NotificationsHeader>
          <NotificationsTitle>알림</NotificationsTitle>
        </NotificationsHeader>
        <EmptyState>
          <h3>알림이 없습니다</h3>
          <p>새로운 알림이 있으면 여기에 표시됩니다.</p>
        </EmptyState>
      </NotificationsContainer>
    );
  }

  const { todayNotifications, yesterdayNotifications, thisWeekNotifications, olderNotifications } = 
    groupNotificationsByDate(displayNotifications);

  return (
    <NotificationsContainer>
      <NotificationsHeader>
        <NotificationsTitle>알림</NotificationsTitle>
      </NotificationsHeader>

      <NotificationsList>
        {todayNotifications.length > 0 && (
          <NotificationSection>
            <SectionHeader>오늘</SectionHeader>
            {todayNotifications.map((notification) => (
              <NotificationItem 
                key={notification.id} 
                className={!notification.isRead ? 'unread' : ''}
              >
                <NotificationAvatar src={notification.avatar} alt={notification.username} />
                <NotificationContent>
                  <NotificationText
                    dangerouslySetInnerHTML={{
                      __html: getNotificationText(notification).replace(
                        notification.username,
                        `<span class="username">${notification.username}</span>`
                      ),
                    }}
                  />
                  <NotificationTime>{formatTime(notification.timestamp)}</NotificationTime>
                </NotificationContent>
                
                {notification.type === 'follow' && (
                  <FollowButton
                    className={notification.isFollowing ? 'following' : ''}
                    onClick={() => handleFollow(notification.id)}
                  >
                    {notification.isFollowing ? '팔로잉' : '팔로우'}
                  </FollowButton>
                )}
                
                {notification.postImage && (
                  <NotificationMedia src={notification.postImage} alt="게시물" />
                )}
                
                {!notification.isRead && <UnreadIndicator />}
              </NotificationItem>
            ))}
          </NotificationSection>
        )}

        {yesterdayNotifications.length > 0 && (
          <NotificationSection>
            <SectionHeader>어제</SectionHeader>
            {yesterdayNotifications.map((notification) => (
              <NotificationItem 
                key={notification.id} 
                className={!notification.isRead ? 'unread' : ''}
              >
                <NotificationAvatar src={notification.avatar} alt={notification.username} />
                <NotificationContent>
                  <NotificationText
                    dangerouslySetInnerHTML={{
                      __html: getNotificationText(notification).replace(
                        notification.username,
                        `<span class="username">${notification.username}</span>`
                      ),
                    }}
                  />
                  <NotificationTime>{formatTime(notification.timestamp)}</NotificationTime>
                </NotificationContent>
                
                {notification.type === 'follow' && (
                  <FollowButton
                    className={notification.isFollowing ? 'following' : ''}
                    onClick={() => handleFollow(notification.id)}
                  >
                    {notification.isFollowing ? '팔로잉' : '팔로우'}
                  </FollowButton>
                )}
                
                {notification.postImage && (
                  <NotificationMedia src={notification.postImage} alt="게시물" />
                )}
                
                {!notification.isRead && <UnreadIndicator />}
              </NotificationItem>
            ))}
          </NotificationSection>
        )}

        {thisWeekNotifications.length > 0 && (
          <NotificationSection>
            <SectionHeader>이번 주</SectionHeader>
            {thisWeekNotifications.map((notification) => (
              <NotificationItem 
                key={notification.id} 
                className={!notification.isRead ? 'unread' : ''}
              >
                <NotificationAvatar src={notification.avatar} alt={notification.username} />
                <NotificationContent>
                  <NotificationText
                    dangerouslySetInnerHTML={{
                      __html: getNotificationText(notification).replace(
                        notification.username,
                        `<span class="username">${notification.username}</span>`
                      ),
                    }}
                  />
                  <NotificationTime>{formatTime(notification.timestamp)}</NotificationTime>
                </NotificationContent>
                
                {notification.type === 'follow' && (
                  <FollowButton
                    className={notification.isFollowing ? 'following' : ''}
                    onClick={() => handleFollow(notification.id)}
                  >
                    {notification.isFollowing ? '팔로잉' : '팔로우'}
                  </FollowButton>
                )}
                
                {notification.postImage && (
                  <NotificationMedia src={notification.postImage} alt="게시물" />
                )}
                
                {!notification.isRead && <UnreadIndicator />}
              </NotificationItem>
            ))}
          </NotificationSection>
        )}

        {olderNotifications.length > 0 && (
          <NotificationSection>
            <SectionHeader>이전</SectionHeader>
            {olderNotifications.map((notification) => (
              <NotificationItem 
                key={notification.id} 
                className={!notification.isRead ? 'unread' : ''}
              >
                <NotificationAvatar src={notification.avatar} alt={notification.username} />
                <NotificationContent>
                  <NotificationText
                    dangerouslySetInnerHTML={{
                      __html: getNotificationText(notification).replace(
                        notification.username,
                        `<span class="username">${notification.username}</span>`
                      ),
                    }}
                  />
                  <NotificationTime>{formatTime(notification.timestamp)}</NotificationTime>
                </NotificationContent>
                
                {notification.type === 'follow' && (
                  <FollowButton
                    className={notification.isFollowing ? 'following' : ''}
                    onClick={() => handleFollow(notification.id)}
                  >
                    {notification.isFollowing ? '팔로잉' : '팔로우'}
                  </FollowButton>
                )}
                
                {notification.postImage && (
                  <NotificationMedia src={notification.postImage} alt="게시물" />
                )}
                
                {!notification.isRead && <UnreadIndicator />}
              </NotificationItem>
            ))}
          </NotificationSection>
        )}
      </NotificationsList>
    </NotificationsContainer>
  );
}
