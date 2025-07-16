// 알림 관련 API 함수들

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

export async function fetchNotifications(): Promise<Notification[]> {
  const res = await fetch('/api/notifications');
  const data = await res.json();
  const notifications = data.notifications || [];
  
  // timestamp를 Date 객체로 변환
  return notifications.map((notification: any) => ({
    ...notification,
    timestamp: new Date(notification.timestamp)
  }));
}
