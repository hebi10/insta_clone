interface ChatSummary {
  id: string;
  username: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string | Date;
  unreadCount: number;
  isOnline: boolean;
}

interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message?: string;
  content?: string;
  type: 'text' | 'image' | 'emoji';
  timestamp: string | Date;
}

interface ChatDetail {
  id: string;
  username: string;
  fullName: string;
  avatarUrl: string;
  isOnline: boolean;
  lastSeen: string | Date | null;
  messages: ChatMessage[];
}

export async function fetchChats() {
  const response = await fetch('/api/chats');
  if (!response.ok) throw new Error('Failed to fetch chats');
  const data: { chats?: ChatSummary[] } = await response.json();

  return (data.chats ?? []).map((chat) => ({
    ...chat,
    timestamp: new Date(chat.timestamp),
  }));
}

export async function fetchChatDetails(chatId: string) {
  try {
    const response = await fetch(`/api/chats/${chatId}`);
    if (!response.ok) throw new Error('Failed to fetch chat details');
    const data: { chat?: ChatDetail } = await response.json();
    const chat = data.chat;

    if (!chat) throw new Error('Chat data not found');

    return {
      ...chat,
      messages: chat.messages.map((message) => ({
        ...message,
        timestamp: new Date(message.timestamp),
      })),
      lastSeen: chat.lastSeen ? new Date(chat.lastSeen) : null,
    };
  } catch (error) {
    console.error('Error fetching chat details:', error);
    throw error;
  }
}
