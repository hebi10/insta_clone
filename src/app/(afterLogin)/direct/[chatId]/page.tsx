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

  const { data: chatData, isLoading } = useQuery({
    queryKey: ['chat', resolvedParams.chatId],
    queryFn: () => fetchChatDetails(resolvedParams.chatId)
  });

  const chatUser = chatData?.user;
  const messages = chatData?.messages || [];

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

  if (isLoading || !chatUser) {
    return (
      <ChatContainer>
        <div style={{ padding: '20px', textAlign: 'center' }}>로딩 중...</div>
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
