import { faker } from "@faker-js/faker";
import { Session } from "next-auth";
import { NavWrap, NavList, NavItem, ProfileNavItem, Avatar, Logo, MenuToggle } from './leftSide.style';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import SearchModal from '../@modal/search/SearchModal';
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiFilm,
  FiSend,
  FiHeart,
  FiPlusSquare,
} from 'react-icons/fi';

interface LeftSideProps {
  session: Session | null;
  isSearchModalOpen?: boolean;
  onSearchModalOpen?: () => void;
  onSearchModalClose?: () => void;
  onCreateModalOpen?: () => void;
  onCreateModalClose?: () => void;
}

export default function LeftSide({ 
  session, 
  isSearchModalOpen = false,
  onSearchModalOpen,
  onSearchModalClose,
  onCreateModalOpen,
  onCreateModalClose
}: LeftSideProps) {
  const pathname = usePathname();
  const [localSearchModalOpen, setLocalSearchModalOpen] = useState(false);
  
  // 외부에서 관리되는 상태가 있으면 그것을 사용, 없으면 로컬 상태 사용
  const searchModalOpen = onSearchModalOpen ? isSearchModalOpen : localSearchModalOpen;
  
  const logoutHandler = () => {
    signOut({ callbackUrl: '/' });
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const handleSearchClick = () => {
    if (onSearchModalOpen) {
      onSearchModalOpen();
    } else {
      setLocalSearchModalOpen(true);
    }
  };

  const handleSearchModalClose = () => {
    if (onSearchModalClose) {
      onSearchModalClose();
    } else {
      setLocalSearchModalOpen(false);
    }
  };

  return (
    <NavWrap isSearchMode={searchModalOpen}>
      {/* 인스타그램 로고 */}
      <Logo isSearchMode={searchModalOpen}>
        <Link href="/">Instagram</Link>
      </Logo>

      {/* 메인 네비게이션 */}
      <NavList>
        <NavItem isSearchMode={searchModalOpen} className={isActive('/') ? 'active' : ''}>
          <Link href="/">
            <FiHome />
            <span>홈</span>
          </Link>
        </NavItem>
        
        <NavItem isSearchMode={searchModalOpen} className={isActive('/search') ? 'active' : ''}>
          <button 
            onClick={handleSearchClick}
            style={{ 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '12px',
              width: '100%',
              fontSize: '16px',
              color: '#262626'
            }}
          >
            <FiSearch />
            <span>검색</span>
          </button>
        </NavItem>
        
        <NavItem isSearchMode={searchModalOpen} className={isActive('/explore') ? 'active' : ''}>
          <Link href="/explore">
            <FiCompass />
            <span>탐색 탭</span>
          </Link>
        </NavItem>
        
        <NavItem isSearchMode={searchModalOpen} className={isActive('/reels') ? 'active' : ''}>
          <Link href="/reels">
            <FiFilm />
            <span>릴스</span>
          </Link>
        </NavItem>
        
        <NavItem isSearchMode={searchModalOpen} className={isActive('/direct') ? 'active' : ''}>
          <Link href="/direct/inbox">
            <FiSend />
            <span>메시지</span>
          </Link>
        </NavItem>
        
        <NavItem isSearchMode={searchModalOpen} className={isActive('/notifications') ? 'active' : ''}>
          <Link href="/notifications">
            <FiHeart />
            <span>알림</span>
          </Link>
        </NavItem>
        
        <NavItem isSearchMode={searchModalOpen} className={isActive('/create') ? 'active' : ''}>
          {onCreateModalOpen ? (
            <button 
              onClick={onCreateModalOpen}
              style={{ 
                background: 'none', 
                border: 'none', 
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '12px',
                width: '100%',
                fontSize: '16px',
                color: '#262626'
              }}
            >
              <FiPlusSquare />
              <span>만들기</span>
            </button>
          ) : (
            <Link href="/create">
              <FiPlusSquare />
              <span>만들기</span>
            </Link>
          )}
        </NavItem>
        
        <NavItem isSearchMode={searchModalOpen} className={isActive(`/${session?.user?.name}`) ? 'active' : ''}>
          <Link href={`/${session?.user?.name || 'profile'}`}>
            <Avatar 
              src={session?.user?.image || '/images/default-avatar.png'} 
              alt={`${session?.user?.name || 'User'}님의 프로필 사진`} 
            />
            <span>프로필</span>
          </Link>
        </NavItem>
      </NavList>

      {/* 하단 메뉴 */}
      <MenuToggle isSearchMode={searchModalOpen}>
        <button onClick={logoutHandler}>
          <Avatar 
            src={session?.user?.image || '/images/default-avatar.png'} 
            alt={`${session?.user?.name || 'User'}님의 프로필 사진`} 
          />
          <span>로그아웃</span>
        </button>
      </MenuToggle>

      {/* 검색 모달 - 로컬 상태로만 관리할 때만 렌더링 */}
      {!onSearchModalOpen && (
        <SearchModal 
          isOpen={localSearchModalOpen} 
          onClose={handleSearchModalClose} 
        />
      )}
    </NavWrap>
  );
}
