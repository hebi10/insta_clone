import styled from 'styled-components';

export const ChatContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #fff;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const ChatHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ChatHeaderAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ChatHeaderName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #262626;
  margin: 0;
`;

export const ChatHeaderStatus = styled.p`
  font-size: 14px;
  color: #8e8e8e;
  margin: 0;
`;

export const ChatHeaderActions = styled.div`
  display: flex;
  gap: 16px;
  
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    
    svg {
      width: 24px;
      height: 24px;
      color: #262626;
    }
    
    &:hover svg {
      color: #0095f6;
    }
  }
`;

export const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const MessageGroup = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOwn',
})<{ isOwn: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
  margin-bottom: 4px;
`;

export const MessageBubble = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOwn',
})<{ isOwn: boolean }>`
  max-width: 60%;
  padding: 8px 12px;
  border-radius: 18px;
  background-color: ${props => props.isOwn ? '#0095f6' : '#f0f0f0'};
  color: ${props => props.isOwn ? '#fff' : '#262626'};
  word-wrap: break-word;
  margin-bottom: 2px;
`;

export const MessageText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.4;
`;

export const MessageTime = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOwn',
})<{ isOwn: boolean }>`
  font-size: 11px;
  color: #8e8e8e;
  margin: 0 8px;
  align-self: ${props => props.isOwn ? 'flex-end' : 'flex-start'};
`;

export const ImageMessage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  height: auto;
`;

export const ChatInput = styled.div`
  padding: 16px 24px;
  border-top: 1px solid #dbdbdb;
  background-color: #fff;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  border: 1px solid #dbdbdb;
  border-radius: 22px;
  background-color: #fff;
  
  &:focus-within {
    border-color: #0095f6;
  }
`;

export const MessageInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #262626;
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const EmojiButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  
  svg {
    width: 20px;
    height: 20px;
    color: #8e8e8e;
  }
  
  &:hover svg {
    color: #262626;
  }
`;

export const SendButton = styled.button<{ disabled?: boolean }>`
  background: none;
  border: none;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  padding: 4px;
  
  svg {
    width: 20px;
    height: 20px;
    color: ${props => props.disabled ? '#c7c7c7' : '#0095f6'};
  }
  
  &:hover:not(:disabled) svg {
    color: #1877f2;
  }
`;
