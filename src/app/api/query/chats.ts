// 채팅 관련 API 함수들

export async function fetchChats() {
  const response = await fetch('/api/chats');
  if (!response.ok) throw new Error('Failed to fetch chats');
  const data = await response.json();
  return data.chats.map((chat: any) => ({
    ...chat,
    timestamp: new Date(chat.timestamp)
  }));
}

export async function fetchChatDetails(chatId: string) {
  const response = await fetch(`/api/chats/${chatId}`);
  if (!response.ok) throw new Error('Failed to fetch chat');
  const data = await response.json();
  return {
    user: data.user,
    messages: data.messages.map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    }))
  };
}
