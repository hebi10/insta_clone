'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchExploreContent } from '@/app/api/query';
import SafeImage from '@/app/_components/SafeImage';
import {
  ExploreContainer,
  ExploreHeader,
  ExploreTitle,
  ExploreSubtitle,
  ExploreGrid,
  ExploreItem,
  ExploreImage,
  ExploreOverlay,
  OverlayStats,
  LoadingContainer,
  NoPostsMessage,
} from './page.style';
import { FiHeart, FiMessageCircle } from 'react-icons/fi';

interface ExplorePost {
  id: string;
  imageUrl: string;
  likeCount: number;
  commentCount: number;
  username: string;
}

export default function ExplorePage() {
  const [posts, setPosts] = useState<ExplorePost[]>([]);

  const { data: fetchedPosts = [], isLoading } = useQuery<ExplorePost[]>({
    queryKey: ['explore'],
    queryFn: fetchExploreContent,
    staleTime: 1000 * 10, 
    gcTime: 1000 * 60 * 10, 
  });

  useEffect(() => {
    if (fetchedPosts.length > 0) {
      setPosts(fetchedPosts);
    }
  }, [fetchedPosts]);

  const displayPosts = posts.length > 0 ? posts : fetchedPosts;

  if (isLoading) {
    return (
      <ExploreContainer>
        <LoadingContainer>게시물을 불러오는 중...</LoadingContainer>
      </ExploreContainer>
    );
  }

  if (displayPosts.length === 0) {
    return (
      <ExploreContainer>
        <NoPostsMessage>
          <h3>표시할 게시물이 없습니다</h3>
          <p>새로운 게시물이 올라오면 여기에 표시됩니다.</p>
        </NoPostsMessage>
      </ExploreContainer>
    );
  }

  return (
    <ExploreContainer>
      <ExploreHeader>
        <ExploreTitle>탐색</ExploreTitle>
        <ExploreSubtitle>회원님을 위한 추천 게시물</ExploreSubtitle>
      </ExploreHeader>

      <ExploreGrid>
        {displayPosts.map((post) => (
          <ExploreItem key={post.id}>
            <SafeImage
              src={post.imageUrl}
              alt={`${post.username}의 게시물`}
              width={400}
              height={400}
              style={{ width: '100%', height: '100%' }}
            />
            <ExploreOverlay className="overlay">
              <OverlayStats>
                <FiHeart />
                {post.likeCount.toLocaleString()}
              </OverlayStats>
              <OverlayStats>
                <FiMessageCircle />
                {post.commentCount.toLocaleString()}
              </OverlayStats>
            </ExploreOverlay>
          </ExploreItem>
        ))}
      </ExploreGrid>
    </ExploreContainer>
  );
}
