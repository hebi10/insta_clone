'use client';

import { useState, use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUserProfile, fetchUserPosts } from '@/app/api/query';
import {
  ProfileContainer,
  ProfileHeader,
  ProfileAvatar,
  AvatarImage,
  ProfileInfo,
  ProfileNameRow,
  Username,
  ProfileActions,
  ActionButton,
  ProfileStats,
  StatItem,
  StatNumber,
  StatLabel,
  ProfileBio,
  FullName,
  Bio,
  Website,
  ProfileTabs,
  TabItem,
  PostsGrid,
  PostItem,
  PostImage,
  PostOverlay,
  OverlayStats,
  EmptyState,
  LoadingContainer,
} from './page.style';
import { FiGrid, FiBookmark, FiTag, FiHeart, FiMessageCircle, FiCamera } from 'react-icons/fi';

interface Props {
  params: Promise<{ username: string }>;
}

interface ProfileData {
  username: string;
  fullName: string;
  avatar: string;
  bio: string;
  website: string;
  postsCount: number;
  followersCount: number;
  followingCount: number;
  isFollowing: boolean;
  isOwnProfile: boolean;
}

interface Post {
  id: string;
  imageUrl: string;
  likeCount: number;
  commentCount: number;
}

export default function ProfilePage({ params }: Props) {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState('posts');

  const { data: profileData, isLoading: profileLoading } = useQuery({
    queryKey: ['profile', resolvedParams.username],
    queryFn: () => fetchUserProfile(resolvedParams.username),
    staleTime: 1000 * 10, 
    gcTime: 1000 * 60 * 10, 
  });

  const { data: posts = [], isLoading: postsLoading } = useQuery({
    queryKey: ['userPosts', resolvedParams.username],
    queryFn: () => fetchUserPosts(resolvedParams.username),
    staleTime: 1000 * 10, 
    gcTime: 1000 * 60 * 10, 
  });

  const isLoading = profileLoading || postsLoading;

  const handleFollow = () => {
    // 실제로는 서버에 팔로우/언팔로우 요청을 보내는 로직이 필요
    console.log('Toggle follow for:', resolvedParams.username);
  };

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
        <LoadingContainer>프로필을 불러오는 중...</LoadingContainer>
      </ProfileContainer>
    );
  }

  if (!profileData) {
    return (
      <ProfileContainer>
        <EmptyState>
          <div className="icon">👤</div>
          <h3>사용자를 찾을 수 없습니다</h3>
          <p>요청하신 페이지를 사용할 수 없습니다.</p>
        </EmptyState>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileAvatar>
          <AvatarImage 
            src={profileData?.avatar || '/images/default-avatar.png'} 
            alt={profileData?.username || 'User'} 
          />
        </ProfileAvatar>

        <ProfileInfo>
          <ProfileNameRow>
            <Username>{profileData?.username || resolvedParams.username}</Username>
            <ProfileActions>
              {profileData?.isOwnProfile ? (
                <>
                  <ActionButton variant="secondary">프로필 편집</ActionButton>
                  <ActionButton variant="secondary">보관된 스토리 보기</ActionButton>
                </>
              ) : (
                <>
                  <ActionButton variant="primary" onClick={handleFollow}>
                    {profileData?.isFollowing ? '팔로잉' : '팔로우'}
                  </ActionButton>
                  <ActionButton variant="secondary">메시지</ActionButton>
                </>
              )}
            </ProfileActions>
          </ProfileNameRow>

          <ProfileStats>
            <StatItem>
              <StatNumber>{formatNumber(profileData?.postsCount)}</StatNumber>
              <StatLabel>게시물</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{formatNumber(profileData?.followersCount)}</StatNumber>
              <StatLabel>팔로워</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>{formatNumber(profileData?.followingCount)}</StatNumber>
              <StatLabel>팔로잉</StatLabel>
            </StatItem>
          </ProfileStats>

          <ProfileBio>
            <FullName>{profileData?.fullName || ''}</FullName>
            <Bio>{profileData?.bio || ''}</Bio>
            {profileData?.website && (
              <Website href={profileData.website} target="_blank" rel="noopener noreferrer">
                {profileData.website}
              </Website>
            )}
          </ProfileBio>
        </ProfileInfo>
      </ProfileHeader>

      <ProfileTabs>
        <TabItem active={activeTab === 'posts'} onClick={() => setActiveTab('posts')}>
          <FiGrid />
          게시물
        </TabItem>
        <TabItem active={activeTab === 'saved'} onClick={() => setActiveTab('saved')}>
          <FiBookmark />
          저장됨
        </TabItem>
        <TabItem active={activeTab === 'tagged'} onClick={() => setActiveTab('tagged')}>
          <FiTag />
          태그됨
        </TabItem>
      </ProfileTabs>

      {activeTab === 'posts' && (
        <>
          {posts.length > 0 ? (
            <PostsGrid>
              {posts.map((post: Post) => (
                <PostItem key={post.id}>
                  <PostImage src={post.imageUrl} alt="게시물" />
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
                <FiCamera />
              </div>
              <h3>게시물 없음</h3>
              <p>첫 번째 사진이나 동영상을 공유해보세요.</p>
            </EmptyState>
          )}
        </>
      )}

      {activeTab === 'saved' && (
        <EmptyState>
          <div className="icon">
            <FiBookmark />
          </div>
          <h3>저장된 게시물이 없습니다</h3>
          <p>저장한 게시물이 여기에 표시됩니다.</p>
        </EmptyState>
      )}

      {activeTab === 'tagged' && (
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
