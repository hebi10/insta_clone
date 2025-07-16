// 알림 관련 API 함수들

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

export async function fetchNotifications(): Promise<Notification[]> {
  const response = await fetch('/api/notifications');
  if (!response.ok) throw new Error('Failed to fetch notifications');
  const data = await response.json();
  return data.notifications ?? [];
}
