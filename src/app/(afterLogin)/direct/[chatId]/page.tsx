'use client';

import { useState, useRef, useEffect, use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchChatDetails } from '@/app/api/query';
import {
  ChatContainer,
  ChatHeader,
  ChatHeaderInfo,
  ChatHeaderAvatar,
  ChatHeaderName,
  ChatHeaderStatus,
  ChatHeaderActions,
  ChatMessages,
  MessageGroup,
  MessageBubble,
  MessageText,
  MessageTime,
  ChatInput,
  InputContainer,
  MessageInput,
  SendButton,
  ImageMessage,
  EmojiButton,
} from './page.style';
import { 
  FiPhone, 
  FiVideo, 
  FiInfo, 
  FiSend, 
  FiSmile,
  FiImage 
} from 'react-icons/fi';

interface Props {
  params: Promise<{ chatId: string }>;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  type: 'text' | 'image';
  timestamp: Date;
  isOwn: boolean;
}

export default function ChatPage({ params }: Props) {
  const resolvedParams = use(params);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { data: chatData, isLoading, error } = useQuery({
    queryKey: ['chat', resolvedParams.chatId],
    queryFn: () => fetchChatDetails(resolvedParams.chatId),
    retry: 2,
    retryDelay: 1000,
    staleTime: 30000,
    refetchOnWindowFocus: false
  });

  console.log('Chat data:', chatData);
  console.log('Loading:', isLoading);
  console.log('Error:', error);

  const chatUser = chatData ? {
    name: chatData.fullName || chatData.username,
    avatar: chatData.avatarUrl || '/images/default-avatar.png',
    isOnline: chatData.isOnline,
    lastSeen: chatData.lastSeen ? new Date(chatData.lastSeen) : new Date()
  } : null;

  const messages = chatData?.messages?.map((msg: any) => ({
    id: msg.id,
    senderId: msg.senderId,
    senderName: msg.senderName || 'User',
    senderAvatar: '/images/default-avatar.png',
    content: msg.message || msg.content,
    type: msg.type === 'image' ? 'image' : 'text',
    timestamp: new Date(msg.timestamp),
    isOwn: msg.senderId === 'user1' // 현재 사용자를 user1으로 가정
  })) || [];

  // 메시지 전송
  const handleSendMessage = () => {
    if (!newMessage.trim() || !chatUser) return;

    // 실제로는 서버에 메시지 전송하는 로직이 필요
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  // 엔터키로 메시지 전송
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 스크롤을 맨 아래로
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ko-KR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatLastSeen = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 1) return '방금 전 활동';
    if (minutes < 60) return `${minutes}분 전 활동`;
    if (hours < 24) return `${hours}시간 전 활동`;
    return `${days}일 전 활동`;
  };

  if (isLoading) {
    return (
      <ChatContainer>
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50vh'
        }}>
          <div>채팅을 불러오는 중...</div>
          <div style={{ fontSize: '14px', color: '#8e8e8e', marginTop: '8px' }}>
            Chat ID: {resolvedParams.chatId}
          </div>
        </div>
      </ChatContainer>
    );
  }

  if (error) {
    return (
      <ChatContainer>
        <div style={{ 
          padding: '20px', 
          textAlign: 'center',
          color: '#ed4956'
        }}>
          채팅을 불러오는데 실패했습니다.
          <div style={{ fontSize: '14px', marginTop: '8px' }}>
            {error.message}
          </div>
        </div>
      </ChatContainer>
    );
  }

  if (!chatData || !chatUser) {
    return (
      <ChatContainer>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          채팅 데이터를 찾을 수 없습니다.
        </div>
      </ChatContainer>
    );
  }

  return (
    <ChatContainer>
      {/* 채팅 헤더 */}
      <ChatHeader>
        <ChatHeaderInfo>
          <ChatHeaderAvatar src={chatUser.avatar} alt={chatUser.name} />
          <div>
            <ChatHeaderName>{chatUser.name}</ChatHeaderName>
            <ChatHeaderStatus>
              {chatUser.isOnline ? '온라인' : chatUser.lastSeen && formatLastSeen(chatUser.lastSeen)}
            </ChatHeaderStatus>
          </div>
        </ChatHeaderInfo>
        <ChatHeaderActions>
          <button><FiPhone /></button>
          <button><FiVideo /></button>
          <button><FiInfo /></button>
        </ChatHeaderActions>
      </ChatHeader>

      {/* 메시지 영역 */}
      <ChatMessages>
        {messages.map((message: Message) => (
          <MessageGroup key={message.id} isOwn={message.isOwn}>
            <MessageBubble isOwn={message.isOwn}>
              {message.type === 'image' ? (
                <ImageMessage src={message.content} alt="이미지" />
              ) : (
                <MessageText>{message.content}</MessageText>
              )}
            </MessageBubble>
            <MessageTime isOwn={message.isOwn}>
              {formatTime(message.timestamp)}
            </MessageTime>
          </MessageGroup>
        ))}
        <div ref={messagesEndRef} />
      </ChatMessages>

      {/* 입력 영역 */}
      <ChatInput>
        <InputContainer>
          <EmojiButton>
            <FiSmile />
          </EmojiButton>
          <MessageInput
            type="text"
            placeholder="메시지 입력..."
            value={newMessage}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <EmojiButton>
            <FiImage />
          </EmojiButton>
          <SendButton 
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <FiSend />
          </SendButton>
        </InputContainer>
      </ChatInput>
    </ChatContainer>
  );
}
