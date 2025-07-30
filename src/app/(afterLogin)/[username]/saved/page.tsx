'use client';

import { useState, useEffect, use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUserSavedPosts } from '@/app/api/query';
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
import { FiBookmark, FiHeart, FiMessageCircle } from 'react-icons/fi';

interface Post {
  id: string;
  imageUrl: string;
  likeCount: number;
  commentCount: number;
}

interface Props {
  params: Promise<{ username: string }>;
}

export default function SavedPage({ params }: Props) {
  const resolvedParams = use(params);
  const [savedPosts, setSavedPosts] = useState<Post[]>([]);

  const { data: fetchedPosts = [], isLoading } = useQuery({
    queryKey: ['savedPosts', resolvedParams.username],
    queryFn: () => fetchUserSavedPosts(resolvedParams.username),
    staleTime: 1000 * 10, 
    gcTime: 1000 * 60 * 10, 
  });

  useEffect(() => {
    if (fetchedPosts.posts && fetchedPosts.posts.length > 0) {
      setSavedPosts(fetchedPosts.posts);
    }
  }, [fetchedPosts]);

  const displayPosts = savedPosts.length > 0 ? savedPosts : (fetchedPosts.posts || []);

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
        <LoadingContainer>저장된 게시물을 불러오는 중...</LoadingContainer>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      {displayPosts.length > 0 ? (
        <PostsGrid>
          {displayPosts.map((post: Post) => (
            <PostItem key={post.id}>
              <PostImage src={post.imageUrl} alt="저장된 게시물" />
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
            <FiBookmark />
          </div>
          <h3>저장된 게시물이 없습니다</h3>
          <p>마음에 드는 게시물을 저장해보세요.</p>
        </EmptyState>
      )}
    </ProfileContainer>
  );
}
