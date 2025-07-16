'use client';

import { useState, useEffect, use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUserTaggedPosts } from '@/app/api/query';
import {
  ProfileContainer,
  EmptyState,
  LoadingContainer,
  PostsGrid,
  PostItem,
  PostImage,
  PostOverlay,
  OverlayStats,
} from '../page.style';
import { FiTag, FiHeart, FiMessageCircle } from 'react-icons/fi';

interface Post {
  id: string;
  imageUrl: string;
  likeCount: number;
  commentCount: number;
}

interface Props {
  params: Promise<{ username: string }>;
}

export default function TaggedPage({ params }: Props) {
  const resolvedParams = use(params);
  const [taggedPosts, setTaggedPosts] = useState<Post[]>([]);

  const { data: fetchedPosts = [], isLoading } = useQuery({
    queryKey: ['taggedPosts', resolvedParams.username],
    queryFn: () => fetchUserTaggedPosts(resolvedParams.username)
  });

  useEffect(() => {
    if (fetchedPosts.posts && fetchedPosts.posts.length > 0) {
      setTaggedPosts(fetchedPosts.posts);
    }
  }, [fetchedPosts]);

  const displayPosts = taggedPosts.length > 0 ? taggedPosts : (fetchedPosts.posts || []);

  const formatNumber = (num: number | undefined | null) => {
    if (num === undefined || num === null || isNaN(num)) {
      return '0';
    }
    
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  if (isLoading) {
    return (
      <ProfileContainer>
        <LoadingContainer>태그된 게시물을 불러오는 중...</LoadingContainer>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      {displayPosts.length > 0 ? (
        <PostsGrid>
          {displayPosts.map((post: Post) => (
            <PostItem key={post.id}>
              <PostImage src={post.imageUrl} alt="태그된 게시물" />
              <PostOverlay className="overlay">
                <OverlayStats>
                  <FiHeart />
                  {formatNumber(post.likeCount)}
                </OverlayStats>
                <OverlayStats>
                  <FiMessageCircle />
                  {formatNumber(post.commentCount)}
                </OverlayStats>
              </PostOverlay>
            </PostItem>
          ))}
        </PostsGrid>
      ) : (
        <EmptyState>
          <div className="icon">
            <FiTag />
          </div>
          <h3>태그된 게시물이 없습니다</h3>
          <p>다른 사람이 회원님을 태그한 게시물이 여기에 표시됩니다.</p>
        </EmptyState>
      )}
    </ProfileContainer>
  );
}
