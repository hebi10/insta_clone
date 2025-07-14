import styled from 'styled-components';

export const FeedWrapper = styled.article`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 470px;
  background-color: #fff;
`;

export const FeedHeader = styled.header`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Username = styled.span`
  color: #262626;
`;

export const FeedImage = styled.img`
  width: 100%;
  display: block;
`;

export const FeedFooter = styled.footer`
  padding: 12px 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #262626;
`;

export const FeedActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;

export const ActionsLeft = styled.div`
  display: flex;
  gap: 12px;
`;

export const Likes = styled.p`
  font-weight: bold;
  padding: 0 16px;
`;

export const CommentCount = styled.p`
  padding: 0 16px;
  color: #737373;
  font-size: 14px;
`;
