'use client';

import { useState } from 'react';
import SafeImage from '@/app/_components/SafeImage';
import {
  FeedWrapper,
  FeedHeader,
  FeedHeaderLeft,
  FeedImage,
  FeedActions,
  ActionsLeft,
  ActionButton,
  LikesSection,
  Likes,
  FeedContent,
  Description,
  CommentCount,
  TimeStamp,
  CommentSection,
  CommentInput,
  PostButton,
  Username,
  UserInfo,
  Location,
  Avatar,
  MoreButton,
} from './feed.style';
import { 
  FiHeart, 
  FiMessageCircle, 
  FiSend, 
  FiBookmark, 
  FiMoreHorizontal 
} from 'react-icons/fi';

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
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likeCount);
  const [comment, setComment] = useState('');

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCurrentLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleComment = () => {
    if (comment.trim()) {
      // 댓글 처리 로직
      setComment('');
    }
  };

  const timeAgo = '2시간 전'; // 실제로는 계산된 시간

  return (
    <FeedWrapper>
      {/* 피드 헤더 */}
      <FeedHeader>
        <FeedHeaderLeft>
          <SafeImage 
            src={avatarUrl} 
            alt={username}
            width={32}
            height={32}
            style={{ borderRadius: '50%' }}
          />
          <UserInfo>
            <Username>{username}</Username>
            <Location>Seoul, South Korea</Location>
          </UserInfo>
        </FeedHeaderLeft>
        <MoreButton>
          <FiMoreHorizontal />
        </MoreButton>
      </FeedHeader>

      {/* 피드 이미지 */}
      <SafeImage 
        src={imageUrl} 
        alt="post"
        width={600}
        height={400}
        style={{ width: '100%', maxWidth: '600px' }}
      />

      {/* 액션 버튼들 */}
      <FeedActions>
        <ActionsLeft>
          <ActionButton 
            onClick={handleLike}
            className={isLiked ? 'liked' : ''}
          >
            <FiHeart />
          </ActionButton>
          <ActionButton>
            <FiMessageCircle />
          </ActionButton>
          <ActionButton>
            <FiSend />
          </ActionButton>
        </ActionsLeft>
        <ActionButton 
          onClick={handleSave}
          className={isSaved ? 'saved' : ''}
        >
          <FiBookmark />
        </ActionButton>
      </FeedActions>

      {/* 좋아요 수 */}
      <LikesSection>
        <Likes>좋아요 {currentLikes.toLocaleString()}개</Likes>
      </LikesSection>

      {/* 피드 내용 */}
      <FeedContent>
        <Description>
          <span className="username">{username}</span>
          {description}
        </Description>
        
        {commentCount > 0 && (
          <CommentCount>
            댓글 {commentCount}개 모두 보기
          </CommentCount>
        )}
        
        <TimeStamp>{timeAgo}</TimeStamp>
      </FeedContent>

      {/* 댓글 입력 */}
      <CommentSection>
        <CommentInput
          type="text"
          placeholder="댓글 달기..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleComment()}
        />
        <PostButton 
          onClick={handleComment}
          disabled={!comment.trim()}
        >
          게시
        </PostButton>
      </CommentSection>
    </FeedWrapper>
  );
}
