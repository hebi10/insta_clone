'use client';

import { NavWrap, NavList, NavItem, Avatar, Logo } from './leftSide.style';
import { faker } from '@faker-js/faker';
import { FiHome, FiSearch, FiCompass, FiFilm, FiSend, FiHeart, FiPlusSquare, FiUser } from 'react-icons/fi';

export default function LeftSide() {
  return (
    <NavWrap>
      <Logo>Instagram</Logo>
      <NavList>
        <NavItem><FiHome /> 홈</NavItem>
        <NavItem><FiSearch /> 검색</NavItem>
        <NavItem><FiCompass /> 탐색 탭</NavItem>
        <NavItem><FiFilm /> 릴스</NavItem>
        <NavItem><FiSend /> 메시지</NavItem>
        <NavItem><FiHeart /> 알림</NavItem>
        <NavItem><FiPlusSquare /> 만들기</NavItem>
        <NavItem>
          <Avatar src={faker.image.avatar()} alt="fingerpets96님의 프로필 사진" />
          프로필
        </NavItem>
      </NavList>
    </NavWrap>
  );
}
