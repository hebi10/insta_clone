'use client';

import {
  FeedWrapper,
  FeedHeader,
  FeedImage,
  FeedFooter,
  Username,
  Description,
  Avatar,
  FeedActions,
  ActionsLeft,
  Likes,
  CommentCount,
} from './feed.style';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';

interface FeedItemProps {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

export default function FeedItem({
  username,
  avatarUrl,
  imageUrl,
  description,
  likeCount,
  commentCount,
}: FeedItemProps) {
  return (
    <FeedWrapper>
      <FeedHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Avatar src={avatarUrl} alt={username} />
          <Username>{username}</Username>
        </div>
        <FiMoreHorizontal />
      </FeedHeader>
      <FeedImage src={imageUrl} alt="post" />
      <FeedActions>
        <ActionsLeft>
          <FiHeart />
          <FiMessageCircle />
          <FiSend />
        </ActionsLeft>
        <FiBookmark />
      </FeedActions>
      <Likes>{`좋아요 ${likeCount}개`}</Likes>
      <FeedFooter>
        <Description>
          <Username>{username}</Username> {description}
        </Description>
        <CommentCount>{`댓글 ${commentCount}개 모두 보기`}</CommentCount>
      </FeedFooter>
    </FeedWrapper>
  );
}
