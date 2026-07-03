'use client';

import { useEffect, useMemo, useState } from 'react';
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
  NotificationContent,
  NotificationText,
  NotificationTime,
  FollowButton,
  LoadingContainer,
  EmptyState,
  UnreadIndicator,
  PostThumb,
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

const sectionOrder = ['오늘', '어제', '이번 주', '이전'];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const { data: fetchedNotifications = [], isLoading } = useQuery<Notification[]>({
    queryKey: ['notifications'],
    queryFn: fetchNotifications,
    staleTime: 1000 * 10,
    gcTime: 1000 * 60 * 10,
  });

  useEffect(() => {
    setNotifications(fetchedNotifications);
  }, [fetchedNotifications]);

  const groupedNotifications = useMemo(() => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    return notifications
      .slice()
      .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
      .reduce((groups, notification) => {
        const date = new Date(notification.timestamp);
        let key = '이전';

        if (date.toDateString() === today.toDateString()) key = '오늘';
        else if (date.toDateString() === yesterday.toDateString()) key = '어제';
        else if (date.getTime() > today.getTime() - 7 * 24 * 60 * 60 * 1000) key = '이번 주';

        groups[key] = [...(groups[key] ?? []), notification];
        return groups;
      }, {} as Record<string, Notification[]>);
  }, [notifications]);

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const diff = Date.now() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days < 7) return `${days}일 전`;
    return date.toLocaleDateString('ko-KR', { month: 'long', day: 'numeric' });
  };

  const getNotificationText = (notification: Notification) => {
    if (notification.message) return notification.message;

    if (notification.type === 'like') return '님이 회원님의 게시물을 좋아합니다.';
    if (notification.type === 'comment') return '님이 댓글을 남겼습니다.';
    if (notification.type === 'follow') return '님이 회원님을 팔로우하기 시작했습니다.';
    return '님이 회원님을 언급했습니다.';
  };

  const markAsRead = (notificationId: string) => {
    setNotifications((items) =>
      items.map((item) => (item.id === notificationId ? { ...item, isRead: true } : item))
    );
  };

  const toggleFollow = (notificationId: string) => {
    setNotifications((items) =>
      items.map((item) =>
        item.id === notificationId ? { ...item, isFollowing: !item.isFollowing } : item
      )
    );
  };

  if (isLoading) {
    return (
      <NotificationsContainer>
        <LoadingContainer>알림을 불러오는 중...</LoadingContainer>
      </NotificationsContainer>
    );
  }

  return (
    <NotificationsContainer>
      <NotificationsHeader>
        <NotificationsTitle>알림</NotificationsTitle>
      </NotificationsHeader>

      {notifications.length === 0 ? (
        <EmptyState>
          <div>새로운 알림이 없습니다.</div>
        </EmptyState>
      ) : (
        <NotificationsList>
          {sectionOrder
            .filter((period) => groupedNotifications[period]?.length)
            .map((period) => (
              <NotificationSection key={period}>
                <SectionHeader>{period}</SectionHeader>

                {groupedNotifications[period].map((notification) => (
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
                      style={{ borderRadius: '50%', flexShrink: 0 }}
                    />

                    <NotificationContent>
                      <NotificationText>
                        <strong>{notification.username}</strong>
                        {getNotificationText(notification)}
                      </NotificationText>
                      <NotificationTime>{formatTimestamp(notification.timestamp)}</NotificationTime>
                    </NotificationContent>

                    {notification.postImageUrl && (
                      <PostThumb>
                        <SafeImage
                          src={notification.postImageUrl}
                          alt="게시물 미리보기"
                          width={44}
                          height={44}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </PostThumb>
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
      )}
    </NotificationsContainer>
  );
}
