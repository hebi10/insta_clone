'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchChats } from '@/app/api/query';
import Link from 'next/link';
import {
  InboxContainer,
  InboxHeader,
  InboxTitle,
  NewMessageButton,
  ChatList,
  ChatItem,
  ChatAvatar,
  ChatInfo,
  ChatName,
  ChatLastMessage,
  ChatTime,
  UnreadBadge,
} from './page.style';
import { FiEdit } from 'react-icons/fi';

interface Chat {
  id: string;
  name: string;
  username: string;
  avatar: string;
  lastMessage: string;
  timestamp: Date | string;
  unreadCount: number;
  isOnline: boolean;
}

export default function InboxPage() {
  const { data: chats = [], isLoading } = useQuery<Chat[]>({
    queryKey: ['chats'],
    queryFn: fetchChats,
    staleTime: 1000 * 10, 
    gcTime: 1000 * 60 * 10, 
  });

  const formatTime = (date: Date | string) => {
    // Date 객체가 아닌 경우 문자열에서 Date 객체로 변환
    const dateObj = date instanceof Date ? date : new Date(date);
    
    // 유효한 날짜인지 확인
    if (isNaN(dateObj.getTime())) {
      return '알 수 없음';
    }
    
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

  if (isLoading) {
    return (
      <InboxContainer>
        <InboxHeader>
          <InboxTitle>메시지</InboxTitle>
        </InboxHeader>
        <div style={{ padding: '20px', textAlign: 'center' }}>로딩 중...</div>
      </InboxContainer>
    );
  }

  return (
    <InboxContainer>
      <InboxHeader>
        <InboxTitle>메시지</InboxTitle>
        <NewMessageButton>
          <FiEdit />
        </NewMessageButton>
      </InboxHeader>

      <ChatList>
        {chats.map((chat) => (
          <Link key={chat.id} href={`/direct/${chat.id}`}>
            <ChatItem>
              <ChatAvatar 
                src={chat.avatar} 
                alt={chat.name}
                isOnline={chat.isOnline}
              />
              <ChatInfo>
                <ChatName hasUnread={chat.unreadCount > 0}>
                  {chat.name}
                </ChatName>
                <ChatLastMessage hasUnread={chat.unreadCount > 0}>
                  {chat.lastMessage.length > 40 
                    ? `${chat.lastMessage.substring(0, 40)}...` 
                    : chat.lastMessage
                  }
                </ChatLastMessage>
              </ChatInfo>
              <div>
                <ChatTime>{formatTime(chat.timestamp)}</ChatTime>
                {chat.unreadCount > 0 && (
                  <UnreadBadge>{chat.unreadCount}</UnreadBadge>
                )}
              </div>
            </ChatItem>
          </Link>
        ))}
      </ChatList>
    </InboxContainer>
  );
}
