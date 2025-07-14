import styled from 'styled-components';

export const FeedWrapper = styled.article`
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin: 20px auto;
  max-width: 500px;
  background-color: #fff;
`;

export const FeedHeader = styled.header`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
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
  max-width: 300px;
  display: block;
`;

export const FeedFooter = styled.footer`
  padding: 12px 16px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #262626;
`;
