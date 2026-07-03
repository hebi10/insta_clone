'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchReels } from '@/app/api/query';
import SafeImage from '@/app/_components/SafeImage';
import {
  ReelsPageWrapper,
  ReelsContainer,
  ReelItem,
  ReelOverlay,
  ReelHeader,
  ReelUsername,
  FollowButton,
  ReelDescription,
  ReelSidebar,
  SidebarButton,
  LoadingReel,
  ReelPlaceholder,
} from './page.style';
import { FiHeart, FiMessageCircle, FiSend, FiBookmark } from 'react-icons/fi';

interface Reel {
  id: string;
  username: string;
  avatar: string;
  description: string;
  likeCount: number;
  commentCount: number;
  isLiked: boolean;
  isFollowing: boolean;
  videoUrl?: string;
}

export default function ReelsPage() {
  const [reels, setReels] = useState<Reel[]>([]);

  const { data: fetchedReels = [], isLoading } = useQuery<Reel[]>({
    queryKey: ['reels'],
    queryFn: fetchReels,
    staleTime: 1000 * 10, 
    gcTime: 1000 * 60 * 10, 
  });

  useEffect(() => {
    if (fetchedReels.length > 0) {
      setReels(fetchedReels);
    }
  }, [fetchedReels]);

  const displayReels = reels.length > 0 ? reels : fetchedReels;

  const handleLike = (reelId: string) => {
    setReels(prevReels =>
      prevReels.map(reel =>
        reel.id === reelId
          ? {
              ...reel,
              isLiked: !reel.isLiked,
              likeCount: reel.isLiked ? reel.likeCount - 1 : reel.likeCount + 1,
            }
          : reel
      )
    );
  };

  const handleFollow = (reelId: string) => {
    setReels(prevReels =>
      prevReels.map(reel =>
        reel.id === reelId
          ? { ...reel, isFollowing: !reel.isFollowing }
          : reel
      )
    );
  };

  const renderDescription = (description: string) => (
    description.split(/(#[\w가-힣]+)/g).map((part, index) => (
      part.startsWith('#') ? (
        <span className="hashtag" key={`${part}-${index}`}>{part}</span>
      ) : part
    ))
  );

  if (isLoading) {
    return (
      <ReelsPageWrapper>
        <ReelsContainer>
          <LoadingReel>릴스를 불러오는 중...</LoadingReel>
        </ReelsContainer>
      </ReelsPageWrapper>
    );
  }

  return (
    <ReelsPageWrapper>
      <ReelsContainer>
      {displayReels.map((reel) => (
        <ReelItem key={reel.id}>
          <ReelPlaceholder>
            🎬 릴스 영상
            <br />
            ({reel.username})
          </ReelPlaceholder>
          
          <ReelOverlay>
            <ReelHeader>
              <SafeImage
                src={reel.avatar}
                alt={reel.username}
                width={32}
                height={32}
                style={{ borderRadius: '50%' }}
              />
              <ReelUsername>{reel.username}</ReelUsername>
              {!reel.isFollowing && (
                <FollowButton onClick={() => handleFollow(reel.id)}>
                  팔로우
                </FollowButton>
              )}
            </ReelHeader>
            <ReelDescription>{renderDescription(reel.description)}</ReelDescription>
          </ReelOverlay>

          <ReelSidebar>
            <SidebarButton
              className={reel.isLiked ? 'liked' : ''}
              onClick={() => handleLike(reel.id)}
            >
              <FiHeart fill={reel.isLiked ? 'currentColor' : 'none'} />
              <span>{reel.likeCount.toLocaleString()}</span>
            </SidebarButton>

            <SidebarButton>
              <FiMessageCircle />
              <span>{reel.commentCount.toLocaleString()}</span>
            </SidebarButton>

            <SidebarButton>
              <FiSend />
            </SidebarButton>

            <SidebarButton>
              <FiBookmark />
            </SidebarButton>
          </ReelSidebar>
        </ReelItem>
      ))}
    </ReelsContainer>
    </ReelsPageWrapper>
  );
}
