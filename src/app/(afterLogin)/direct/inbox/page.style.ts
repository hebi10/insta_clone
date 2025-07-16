import styled from 'styled-components';

export const InboxContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

export const InboxHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
`;

export const InboxTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #262626;
  margin: 0;
`;

export const NewMessageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: #262626;
  }
`;

export const ChatList = styled.div`
  flex: 1;
  overflow-y: auto;
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 24px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  
  &:hover {
    background-color: #fafafa;
  }
`;

export const ChatAvatar = styled.div.withConfig({
  shouldForwardProp: (prop) => !['src', 'alt', 'isOnline'].includes(prop),
})<{ src: string; alt: string; isOnline?: boolean }>`
  position: relative;
  width: 56px;
  height: 56px;
  margin-right: 12px;
  
  &::before {
    content: '';
    display: block;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-image: url(${props => props.src});
    background-size: cover;
    background-position: center;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.isOnline ? '#00c851' : 'transparent'};
    border: 2px solid #fff;
    display: ${props => props.isOnline ? 'block' : 'none'};
  }
`;

export const ChatInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  margin-right: 12px;
`;

export const ChatName = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasUnread',
})<{ hasUnread: boolean }>`
  font-size: 14px;
  font-weight: ${props => props.hasUnread ? '600' : '400'};
  color: #262626;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ChatLastMessage = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasUnread',
})<{ hasUnread: boolean }>`
  font-size: 14px;
  color: ${props => props.hasUnread ? '#262626' : '#8e8e8e'};
  font-weight: ${props => props.hasUnread ? '500' : '400'};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ChatTime = styled.div`
  font-size: 12px;
  color: #8e8e8e;
  margin-bottom: 4px;
  text-align: right;
`;

export const UnreadBadge = styled.div`
  background-color: #0095f6;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 16px;
  text-align: center;
  line-height: 1.2;
`;
