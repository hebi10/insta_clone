import styled from 'styled-components';

export const FeedWrapper = styled.article`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin-bottom: 20px;
  max-width: 470px;
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
`;

export const FeedHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background-color: #ffffff;
`;

export const FeedHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Username = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Location = styled.span`
  font-size: 12px;
  color: #8e8e8e;
  cursor: pointer;
`;

export const MoreButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #262626;
  }
`;

export const FeedImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  user-select: none;
`;

export const FeedActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 16px 8px 16px;
`;

export const ActionsLeft = styled.div`
  display: flex;
  gap: 16px;
`;

export const ActionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: #262626;
    stroke-width: 1.5;
  }
  
  &.liked svg {
    color: #ed4956;
    fill: #ed4956;
  }
  
  &.saved svg {
    color: #262626;
    fill: #262626;
  }
`;

export const LikesSection = styled.div`
  padding: 0 16px 8px 16px;
`;

export const Likes = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  cursor: pointer;
`;

export const FeedContent = styled.div`
  padding: 0 16px 8px 16px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #262626;
  line-height: 18px;
  margin-bottom: 4px;
  
  .username {
    font-weight: 600;
    margin-right: 4px;
    cursor: pointer;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CommentCount = styled.button`
  background: none;
  border: none;
  color: #8e8e8e;
  font-size: 14px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 4px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const TimeStamp = styled.div`
  font-size: 10px;
  color: #8e8e8e;
  text-transform: uppercase;
  letter-spacing: 0.2px;
  margin-bottom: 12px;
`;

export const CommentSection = styled.div`
  border-top: 1px solid #efefef;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CommentInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #262626;
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const PostButton = styled.button`
  background: none;
  border: none;
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:disabled {
    color: #b3d4fc;
    cursor: default;
  }
  
  &:hover:not(:disabled) {
    color: #00376b;
  }
`;
