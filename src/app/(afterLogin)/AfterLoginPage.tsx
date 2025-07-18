"use client";
import { useState } from "react";
import FeedItem from "./_components/feed";
import LeftSide from "./_components/leftSide";
import MySide from "./_components/MySide";
import SearchModal from "./@modal/search/SearchModal";
import { Main, LeftArea, ContentArea, LeftList, RightArea } from "./AfterLoginPage.style";
import { useQuery } from '@tanstack/react-query';
import { useSession } from "next-auth/react";
import { fetchPosts } from '@/app/api/query';

interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

export default function AfterLoginPage() {
  // NextAuth 쿠키에서 세션 데이터 가져오기
  const { data: session } = useSession();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const handleSearchModalOpen = () => setIsSearchModalOpen(true);
  const handleSearchModalClose = () => setIsSearchModalOpen(false);

  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  // 초기 로딩만 표시 (백그라운드 fetching은 무시)
  if (isLoading && posts.length === 0) {
    return (
      <Main>
        <LeftArea>
          <LeftSide 
            session={session} 
            isSearchModalOpen={isSearchModalOpen}
            onSearchModalOpen={handleSearchModalOpen}
            onSearchModalClose={handleSearchModalClose}
          />
        </LeftArea>
        <ContentArea>
          <LeftList>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '200px',
              color: '#8e8e8e'
            }}>
              게시물을 불러오는 중...
            </div>
          </LeftList>
          <RightArea>
            <MySide session={session} />
          </RightArea>
        </ContentArea>
      </Main>
    );
  }

  return (
    <Main>
      <LeftArea>
        <LeftSide 
          session={session} 
          isSearchModalOpen={isSearchModalOpen}
          onSearchModalOpen={handleSearchModalOpen}
          onSearchModalClose={handleSearchModalClose}
        />
      </LeftArea>
      <ContentArea>
        <LeftList>
          {posts.map((item, idx) => (
            <FeedItem
              key={idx}
              username={item.username}
              avatarUrl={item.avatarUrl}
              imageUrl={item.imageUrl}
              description={item.description}
              likeCount={item.likeCount}
              commentCount={item.commentCount}
            />
          ))}
        </LeftList>
        <RightArea>
          <MySide session={session} />
        </RightArea>
      </ContentArea>
      
      {/* 검색 모달 */}
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={handleSearchModalClose} 
      />
    </Main>
  );
}
