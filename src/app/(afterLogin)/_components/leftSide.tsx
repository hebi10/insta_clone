'use client';

import { NavWrap, NavList, NavItem, Avatar, Logo } from './leftSide.style';
import { faker } from '@faker-js/faker';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiFilm,
  FiSend,
  FiHeart,
  FiPlusSquare,
  FiUser,
} from 'react-icons/fi';

export default function LeftSide() {
  return (
    <NavWrap>
      <Logo>Instagram</Logo>
      <NavList>
        <NavItem>
          <Link href="/">
            <FiHome /> <span>홈</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/search">
            <FiSearch /> <span>검색</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/explore">
            <FiCompass /> <span>탐색 탭</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/reels">
            <FiFilm /> <span>릴스</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/direct/inbox">
            <FiSend /> <span>메시지</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/notifications">
            <FiHeart /> <span>알림</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/create">
            <FiPlusSquare /> <span>만들기</span>
          </Link>
        </NavItem>
        <NavItem onClick={() => signOut()}>
          <Avatar src={faker.image.avatar()} alt="fingerpets96님의 프로필 사진" />
          <span>프로필</span>
          <span>로그아웃</span>
        </NavItem>
      </NavList>
    </NavWrap>
  );
}
