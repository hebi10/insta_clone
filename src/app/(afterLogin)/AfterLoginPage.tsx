"use client";
import { useState } from "react";
import FeedItem from "./_components/feed";
import LeftSide from "./_components/leftSide";
import MySide from "./_components/MySide";
import SearchModal from "./@modal/search/SearchModal";
import CreateModal from "./@modal/(.)create/page";
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
  const { data: session, status } = useSession();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleSearchModalOpen = () => setIsSearchModalOpen(true);
  const handleSearchModalClose = () => setIsSearchModalOpen(false);
  const handleCreateModalOpen = () => setIsCreateModalOpen(true);
  const handleCreateModalClose = () => setIsCreateModalOpen(false);

  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  return (
    <Main>
      <LeftArea>
        <LeftSide 
          session={session} 
          isSearchModalOpen={isSearchModalOpen}
          onSearchModalOpen={handleSearchModalOpen}
          onSearchModalClose={handleSearchModalClose}
          onCreateModalOpen={handleCreateModalOpen}
          onCreateModalClose={handleCreateModalClose}
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
      
      {/* 생성 모달 */}
      {isCreateModalOpen && (
        <CreateModal onClose={handleCreateModalClose} />
      )}
    </Main>
  );
}
