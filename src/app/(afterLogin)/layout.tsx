"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import LeftSide from "./_components/leftSide";
import SearchModal from "./@modal/search/SearchModal";
import { Container, LeftArea, MobileHeader, MobileContent } from "./layout.style";
import Image from "next/image";

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  const { data: session } = useSession();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleSearchModalOpen = () => setIsSearchModalOpen(true);
  const handleSearchModalClose = () => setIsSearchModalOpen(false);

  // 화면 크기 감지
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getMarginLeft = () => {
    if (isMobile) return '0';
    if (isSearchModalOpen) return '72px';
    if (typeof window !== 'undefined' && window.innerWidth <= 1023) return '72px'; // tablet
    return '220px'; // desktop
  };

  return (
    <Container className={isSearchModalOpen ? 'search-mode' : ''}>
      {/* 모바일 헤더 */}
      {isMobile && (
        <MobileHeader>
          <Image 
            src="/images/img_logo.svg" 
            alt="Instagram" 
            width={103} 
            height={29}
          />
          <div>
            {/* 모바일 헤더 우측 아이콘들 */}
          </div>
        </MobileHeader>
      )}

      <LeftArea>
        <LeftSide 
          session={session} 
          isSearchModalOpen={isSearchModalOpen}
          onSearchModalOpen={handleSearchModalOpen}
          onSearchModalClose={handleSearchModalClose}
        />
      </LeftArea>
      
      <div style={{ 
        flex: 1, 
        marginLeft: getMarginLeft(),
        transition: 'margin-left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }}>
        {isMobile ? (
          <MobileContent>
            {children}
          </MobileContent>
        ) : (
          children
        )}
      </div>
      
      {/* 검색 모달 */}
      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={handleSearchModalClose} 
      />
      
      {modal}
    </Container>
  );
}