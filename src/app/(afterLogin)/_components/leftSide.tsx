'use client';

import { NavWrap, NavList, NavItem, NavLink, Avatar, Logo } from './leftSide.style';
import { faker } from '@faker-js/faker';
import { FiHome, FiSearch, FiCompass, FiFilm, FiSend, FiHeart, FiPlusSquare } from 'react-icons/fi';

export default function LeftSide() {
  const avatar = faker.image.avatar();
  return (
    <NavWrap>
      <Logo>Instagram</Logo>
      <NavList>
        <NavItem>
          <NavLink href="/">
            <FiHome /> 홈
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/search">
            <FiSearch /> 검색
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/explore">
            <FiCompass /> 탐색 탭
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/reels">
            <FiFilm /> 릴스
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/direct/inbox">
            <FiSend /> 메시지
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/notifications">
            <FiHeart /> 알림
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/create">
            <FiPlusSquare /> 만들기
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/fingerpets96">
            <Avatar src={avatar} alt="fingerpets96님의 프로필 사진" />
            프로필
          </NavLink>
        </NavItem>
      </NavList>
    </NavWrap>
  );
}
