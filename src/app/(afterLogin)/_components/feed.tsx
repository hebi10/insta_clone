'use client';

import {
  FeedWrapper,
  FeedHeader,
  FeedImage,
  FeedFooter,
  Username,
  Description,
  Avatar
} from './feed.style';

interface FeedItemProps {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  description: string;
}

export default function FeedItem({ username, avatarUrl, imageUrl, description }: FeedItemProps) {
  return (
    <FeedWrapper>
      <FeedHeader>
        <Avatar src={avatarUrl} alt={username} />
        <Username>{username}</Username>
      </FeedHeader>
      <FeedImage src={imageUrl} alt="post" />
      <FeedFooter>
        <Description>{description}</Description>
      </FeedFooter>
    </FeedWrapper>
  );
}
