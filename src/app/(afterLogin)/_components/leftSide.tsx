"use client";

import { Session } from "next-auth";
import { NavWrap, NavList, NavItem, Logo, MenuToggle } from "./leftSide.style";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchModal from "../@modal/search/SearchModal";
import SafeImage from "@/app/_components/SafeImage";
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiFilm,
  FiSend,
  FiHeart,
  FiPlusSquare,
  FiLogOut,
} from "react-icons/fi";

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
  onSearchModalClose,
}: LeftSideProps) {
  const pathname = usePathname();
  const [localSearchModalOpen, setLocalSearchModalOpen] = useState(false);
  const searchModalOpen = onSearchModalOpen ? isSearchModalOpen : localSearchModalOpen;

  const logoutHandler = () => {
    signOut({ callbackUrl: "/" });
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const handleSearchClick = () => {
    if (searchModalOpen) {
      handleSearchModalClose();
    } else if (onSearchModalOpen) {
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

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    if (pathname === href) {
      e.preventDefault();
      return false;
    }
    return true;
  };

  const navItems = [
    { href: "/", icon: FiHome, label: "홈", active: isActive("/") },
    { href: "/search", icon: FiSearch, label: "검색", active: isActive("/search"), isButton: true },
    { href: "/explore", icon: FiCompass, label: "탐색 탭", active: isActive("/explore") },
    { href: "/reels", icon: FiFilm, label: "릴스", active: isActive("/reels") },
    { href: "/direct/inbox", icon: FiSend, label: "메시지", active: isActive("/direct") },
    { href: "/notifications", icon: FiHeart, label: "알림", active: isActive("/notifications") },
    { href: "/create", icon: FiPlusSquare, label: "만들기", active: isActive("/create") },
    {
      href: `/${session?.user?.name || "profile"}`,
      icon: null,
      label: "프로필",
      active: isActive(`/${session?.user?.name}`),
      isProfile: true,
    },
  ];

  return (
    <NavWrap isSearchMode={searchModalOpen}>
      <Logo isSearchMode={searchModalOpen}>
        <Link href="/" onClick={(e) => handleNavigation("/", e)}>
          Instagram
        </Link>
      </Logo>

      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.label} isSearchMode={searchModalOpen} className={item.active ? "active" : ""}>
            {item.isButton ? (
              <button onClick={handleSearchClick}>
                {item.icon && <item.icon />}
                <span>{item.label}</span>
              </button>
            ) : item.isProfile ? (
              <Link href={item.href} onClick={(e) => handleNavigation(item.href, e)}>
                <SafeImage
                  src="/images/default-avatar.png"
                  alt={`${session?.user?.name || "User"}님의 프로필 사진`}
                  width={24}
                  height={24}
                  style={{ borderRadius: "50%" }}
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
        ))}
      </NavList>

      <MenuToggle isSearchMode={searchModalOpen}>
        <button onClick={logoutHandler}>
          <FiLogOut />
          <span>로그아웃</span>
        </button>
      </MenuToggle>

      {!onSearchModalOpen && <SearchModal isOpen={localSearchModalOpen} onClose={handleSearchModalClose} />}
    </NavWrap>
  );
}
