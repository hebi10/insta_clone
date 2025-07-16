"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import LeftSide from "./_components/leftSide";
import SearchModal from "./@modal/search/SearchModal";
import CreateModal from "./@modal/(.)create/page";
import { Container, LeftArea } from "./layout.style";

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  const { data: session } = useSession();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleSearchModalOpen = () => setIsSearchModalOpen(true);
  const handleSearchModalClose = () => setIsSearchModalOpen(false);
  const handleCreateModalOpen = () => setIsCreateModalOpen(true);
  const handleCreateModalClose = () => setIsCreateModalOpen(false);

  return (
    <Container className={isSearchModalOpen ? 'search-mode' : ''}>
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
      <div style={{ 
        flex: 1, 
        marginLeft: isSearchModalOpen ? '72px' : '220px',
        transition: 'margin-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}>
        {children}
      </div>
      
      {/* 검색 모달 */}
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={handleSearchModalClose} 
      />
      
      {/* 생성 모달 */}
      {isCreateModalOpen && (
        <CreateModal onClose={handleCreateModalClose} />
      )}
      
      {modal}
    </Container>
  );
}