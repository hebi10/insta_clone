'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/app/api/query';
import SafeImage from '@/app/_components/SafeImage';
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
  avatarUrl: string;
  timestamp: string;
  isRead: boolean;
  postImageUrl?: string;
  message?: string;
  isFollowing?: boolean;
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const { data: fetchedNotifications = [], isLoading } = useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    staleTime: 1000 * 10,
    gcTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    if (fetchedNotifications.length > 0) {
      setNotifications(fetchedNotifications);
    }
  }, [fetchedNotifications]);

  const getNotificationText = (notification: Notification) => {
    if (notification.message) {
      return notification.message;
    }
    
    switch (notification.type) {
      case 'like':
        return '님이 회원님의 게시물을 좋아합니다.';
      case 'comment':
        return '님이 댓글을 남겼습니다.';
      case 'follow':
        return '님이 회원님을 팔로우하기 시작했습니다.';
      case 'mention':
        return '님이 회원님을 언급했습니다.';
      default:
        return '';
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return '방금 전';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}분 전`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}시간 전`;
    if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}일 전`;
    return date.toLocaleDateString();
  };

  const markAsRead = (notificationId: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const toggleFollow = (notificationId: string) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification =>
        notification.id === notificationId
          ? { ...notification, isFollowing: !notification.isFollowing }
          : notification
      )
    );
  };

  // 알림을 날짜별로 그룹화
  const groupedNotifications = notifications.reduce((groups, notification) => {
    const date = new Date(notification.timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    let key: string;
    if (date.toDateString() === today.toDateString()) {
      key = '오늘';
    } else if (date.toDateString() === yesterday.toDateString()) {
      key = '어제';
    } else if (date.getTime() > today.getTime() - 7 * 24 * 60 * 60 * 1000) {
      key = '이번 주';
    } else {
      key = '이전';
    }

    if (!groups[key]) groups[key] = [];
    groups[key].push(notification);
    return groups;
  }, {} as Record<string, Notification[]>);

  if (isLoading) {
    return (
      <NotificationsContainer>
        <LoadingContainer>
          <div>알림을 불러오는 중...</div>
        </LoadingContainer>
      </NotificationsContainer>
    );
  }

  if (notifications.length === 0) {
    return (
      <NotificationsContainer>
        <NotificationsHeader>
          <NotificationsTitle>알림</NotificationsTitle>
        </NotificationsHeader>
        <EmptyState>
          <div>새로운 알림이 없습니다.</div>
        </EmptyState>
      </NotificationsContainer>
    );
  }

  return (
    <NotificationsContainer>
      <NotificationsHeader>
        <NotificationsTitle>알림</NotificationsTitle>
      </NotificationsHeader>

      <NotificationsList>
        {Object.entries(groupedNotifications).map(([period, periodNotifications]) => (
          <NotificationSection key={period}>
            <SectionHeader>{period}</SectionHeader>
            
            {periodNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                isRead={notification.isRead}
                onClick={() => markAsRead(notification.id)}
              >
                {!notification.isRead && <UnreadIndicator />}
                
                <SafeImage
                  src={notification.avatarUrl}
                  alt={notification.username}
                  width={44}
                  height={44}
                  style={{ borderRadius: '50%' }}
                />
                
                <NotificationContent>
                  <NotificationText>
                    <strong>{notification.username}</strong>
                    {getNotificationText(notification)}
                  </NotificationText>
                  <NotificationTime>
                    {formatTimestamp(notification.timestamp)}
                  </NotificationTime>
                </NotificationContent>

                {notification.postImageUrl && (
                  <SafeImage
                    src={notification.postImageUrl}
                    alt="게시물"
                    width={44}
                    height={44}
                    style={{ borderRadius: '4px' }}
                  />
                )}

                {notification.type === 'follow' && (
                  <FollowButton
                    isFollowing={notification.isFollowing}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFollow(notification.id);
                    }}
                  >
                    {notification.isFollowing ? '팔로잉' : '팔로우'}
                  </FollowButton>
                )}
              </NotificationItem>
            ))}
          </NotificationSection>
        ))}
      </NotificationsList>
    </NotificationsContainer>
  );
}
