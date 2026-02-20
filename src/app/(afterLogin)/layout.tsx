"use client";

import { useState, useEffect, ReactNode } from "react";
import { useSession } from "next-auth/react";
import LeftSide from "./_components/leftSide";
import SearchModal from "./@modal/search/SearchModal";

interface RootLayoutProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  const { data: session } = useSession();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(220);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w <= 767) setSidebarWidth(0);
      else if (w <= 1023) setSidebarWidth(72);
      else setSidebarWidth(isSearchModalOpen ? 72 : 220);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [isSearchModalOpen]);

  return (
    <div style={{ display: 'flex', minHeight: '100dvh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 100, height: '100dvh' }}>
        <LeftSide
          session={session}
          isSearchModalOpen={isSearchModalOpen}
          onSearchModalOpen={() => setIsSearchModalOpen(true)}
          onSearchModalClose={() => setIsSearchModalOpen(false)}
        />
      </div>

      <div style={{ flex: 1, marginLeft: sidebarWidth, transition: 'margin-left 0.3s ease' }}>
        {children}
      </div>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {modal}
    </div>
  );
}