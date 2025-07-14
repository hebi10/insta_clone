import { faker } from '@faker-js/faker';
import { Nav, NavList, NavItem, Profile, Avatar } from './leftSide.style';

export default function LeftSide() {
  const avatar = faker.image.avatar();
  return (
    <Nav>
      <NavList>
        <NavItem>홈</NavItem>
        <NavItem>검색</NavItem>
        <NavItem>탐색 탭</NavItem>
        <NavItem>릴스</NavItem>
        <NavItem>메시지</NavItem>
        <NavItem>알림</NavItem>
        <NavItem>만들기</NavItem>
      </NavList>
      <Profile>
        <Avatar src={avatar} alt="fingerpets96 프로필" />
        <span>fingerpets96</span>
      </Profile>
      <NavItem>프로필</NavItem>
    </Nav>
  );
}
