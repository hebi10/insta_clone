import { faker } from "@faker-js/faker";
import { Session } from "next-auth";
import { NavWrap, NavList, NavItem, ProfileNavItem, Avatar, Logo, MenuToggle } from './leftSide.style';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import SearchModal from '../@modal/search/SearchModal';
import SafeImage from '@/app/_components/SafeImage';
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiFilm,
  FiSend,
  FiHeart,
  FiPlusSquare,
  FiLogOut,
} from 'react-icons/fi';

interface LeftSideProps {
  session: Session | null;
  isSearchModalOpen?: boolean;
  onSearchModalOpen?: () => void;
  onSearchModalClose?: () => void;
}

export default function LeftSide({ 
  session, 
  isSearchModalOpen = false,
  onSearchModalOpen,
  onSearchModalClose
}: LeftSideProps) {
  const pathname = usePathname();
  const [localSearchModalOpen, setLocalSearchModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // 외부에서 관리되는 상태가 있으면 그것을 사용, 없으면 로컬 상태 사용
  const searchModalOpen = onSearchModalOpen ? isSearchModalOpen : localSearchModalOpen;
  
  // 화면 크기 감지
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
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

  // 현재 페이지와 같은 경로로 이동하는 것을 방지하는 헬퍼 함수
  const handleNavigation = (href: string, e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      // 현재 페이지임을 시각적으로 표시 (옵션)
      console.log('이미 현재 페이지입니다:', href);
      return false;
    }
    return true;
  };

  // 모바일용 네비게이션 아이템들 (Instagram 하단 탭바와 동일)
  const mobileNavItems = [
    { href: '/', icon: FiHome, active: isActive('/') },
    { href: '/search', icon: FiSearch, active: isActive('/search'), isButton: true },
    { href: '/explore', icon: FiCompass, active: isActive('/explore') },
    { href: '/reels', icon: FiFilm, active: isActive('/reels') },
    { href: `/${session?.user?.name || 'profile'}`, icon: null, active: isActive(`/${session?.user?.name}`), isProfile: true },
  ];

  // 데스크톱용 전체 네비게이션 아이템들
  const desktopNavItems = [
    { href: '/', icon: FiHome, label: '홈', active: isActive('/') },
    { href: '/search', icon: FiSearch, label: '검색', active: isActive('/search'), isButton: true },
    { href: '/explore', icon: FiCompass, label: '탐색 탭', active: isActive('/explore') },
    { href: '/reels', icon: FiFilm, label: '릴스', active: isActive('/reels') },
    { href: '/direct/inbox', icon: FiSend, label: '메시지', active: isActive('/direct') },
    { href: '/notifications', icon: FiHeart, label: '알림', active: isActive('/notifications') },
    { href: '/create', icon: FiPlusSquare, label: '만들기', active: isActive('/create') },
    { href: `/${session?.user?.name || 'profile'}`, icon: null, label: '프로필', active: isActive(`/${session?.user?.name}`), isProfile: true },
  ];

  return (
    <NavWrap isSearchMode={searchModalOpen}>
      {/* 인스타그램 로고 (데스크톱/태블릿만) */}
      <Logo isSearchMode={searchModalOpen}>
        <Link href="/" onClick={(e) => handleNavigation('/', e)}>Instagram</Link>
      </Logo>

      {/* 메인 네비게이션 */}
      <NavList>
        {isMobile ? (
          // 모바일: 하단 탭바 (5개 아이템만)
          mobileNavItems.map((item, index) => (
            <NavItem key={index} isSearchMode={searchModalOpen} className={item.active ? 'active' : ''}>
              {item.isButton ? (
                <button 
                  onClick={handleSearchClick}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                  }}
                >
                  {item.icon && <item.icon />}
                </button>
              ) : item.isProfile ? (
                <Link href={item.href} onClick={(e) => handleNavigation(item.href, e)}>
                  <SafeImage
                    src='/images/default-avatar.png'
                    alt={`${session?.user?.name || 'User'}님의 프로필 사진`}
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%' }}
                  />
                </Link>
              ) : (
                <Link href={item.href} onClick={(e) => handleNavigation(item.href, e)}>
                  {item.icon && <item.icon />}
                </Link>
              )}
            </NavItem>
          ))
        ) : (
          // 데스크톱/태블릿: 전체 네비게이션
          desktopNavItems.map((item, index) => (
            <NavItem key={index} isSearchMode={searchModalOpen} className={item.active ? 'active' : ''}>
              {item.isButton ? (
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
                  {item.icon && <item.icon />}
                  <span>{item.label}</span>
                </button>
              ) : item.isProfile ? (
                <Link href={item.href} onClick={(e) => handleNavigation(item.href, e)}>
                  <SafeImage
                    src='/images/default-avatar.png'
                    alt={`${session?.user?.name || 'User'}님의 프로필 사진`}
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%', marginRight: '16px' }}
                  />
                  <span>{item.label}</span>
                </Link>
              ) : (
                <Link href={item.href} onClick={(e) => handleNavigation(item.href, e)}>
                  {item.icon && <item.icon />}
                  <span>{item.label}</span>
                </Link>
              )}
            </NavItem>
          ))
        )}
      </NavList>

      {/* 하단 메뉴 (데스크톱/태블릿만) */}
      {!isMobile && (
        <MenuToggle isSearchMode={searchModalOpen}>
          <button onClick={logoutHandler}>
            <FiLogOut />
            <span>로그아웃</span>
          </button>
        </MenuToggle>
      )}

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
