// 채팅 관련 API 함수들

export async function fetchChats() {
  const response = await fetch('/api/chats');
  if (!response.ok) throw new Error('Failed to fetch chats');
  const data = await response.json();
  
  // timestamp를 Date 객체로 변환
  const chats = (data.chats ?? []).map((chat: any) => ({
    ...chat,
    timestamp: new Date(chat.timestamp)
  }));
  
  return chats;
}

export async function fetchChatDetails(chatId: string) {
  try {
    const response = await fetch(`/api/chats/${chatId}`);
    if (!response.ok) throw new Error('Failed to fetch chat details');
    const data = await response.json();
    
    console.log('Raw API response:', data);
    
    // API 응답을 처리하여 올바른 형식으로 변환
    const chat = data.chat;
    if (!chat) throw new Error('Chat data not found');
    
    // messages 배열의 timestamp를 Date 객체로 변환
    const processedMessages = (chat.messages || []).map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    }));
    
    const processedChat = {
      ...chat,
      messages: processedMessages,
      lastSeen: chat.lastSeen ? new Date(chat.lastSeen) : null
    };
    
    console.log('Processed chat:', processedChat);
    return processedChat;
  } catch (error) {
    console.error('Error fetching chat details:', error);
    throw error;
  }
}
