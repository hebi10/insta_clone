'use client';

import {
  FeedWrapper,
  FeedHeader,
  FeedImage,
  FeedFooter,
  Username,
  Description
} from './feed.style';

interface FeedItemProps {
  username: string;
  imageUrl: string;
  description: string;
}

export default function FeedItem({ username, imageUrl, description }: FeedItemProps) {
  return (
    <FeedWrapper>
      <FeedHeader>
        <Username>{username}</Username>
      </FeedHeader>
      <FeedImage src={imageUrl} alt="post" />
      <FeedFooter>
        <Description>{description}</Description>
      </FeedFooter>
    </FeedWrapper>
  );
}
