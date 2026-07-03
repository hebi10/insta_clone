import { Session } from "next-auth";
import SafeImage from '@/app/_components/SafeImage';
import {
  MySideContainer,
  UserProfile,
  UserInfo,
  UserName,
  UserEmail,
  SectionHeader,
  SeeAllBtn,
  SuggestList,
  SuggestRow,
  SuggestInfo,
  FollowBtn,
  Footer,
  FooterText,
  Copyright
} from "./MySide.style";

interface MySideProps {
  session: Session | null;
}

const suggestUsers = [
  { id: 1, name: "film_archive", desc: "회원님을 위한 추천", avatar: "https://picsum.photos/seed/avatar-film/64/64" },
  { id: 2, name: "daily_table", desc: "최근 활동이 많은 계정", avatar: "https://picsum.photos/seed/avatar-table/64/64" },
  { id: 3, name: "seoul_walks", desc: "회원님을 위한 추천", avatar: "https://picsum.photos/seed/avatar-seoul/64/64" },
  { id: 4, name: "ui_collective", desc: "design_ref_kr 님이 팔로우합니다", avatar: "https://picsum.photos/seed/avatar-ui/64/64" },
  { id: 5, name: "cafe_weekend", desc: "새로 가입한 계정", avatar: "https://picsum.photos/seed/avatar-cafe/64/64" },
];

export default function MySide({ session }: MySideProps) {
  return (
    <MySideContainer>
      <UserProfile>
        <SafeImage
          src='/images/default-avatar.png'
          alt="프로필"
          width={56}
          height={56}
          style={{ borderRadius: '50%' }}
        />
        <UserInfo>
          <UserName>{session?.user?.name || 'mockuser'}</UserName>
          <UserEmail>{session?.user?.email || 'test@test.com'}</UserEmail>
        </UserInfo>
      </UserProfile>

      <SectionHeader>
        <span>회원님을 위한 추천</span>
        <SeeAllBtn>모두 보기</SeeAllBtn>
      </SectionHeader>

      <SuggestList>
        {suggestUsers.map((u) => (
          <SuggestRow key={u.id}>
            <SafeImage
              src={u.avatar}
              alt={u.name}
              width={32}
              height={32}
              style={{ borderRadius: '50%' }}
            />
            <SuggestInfo>
              <div className="name">{u.name}</div>
              <div className="desc">{u.desc}</div>
            </SuggestInfo>
            <FollowBtn>팔로우</FollowBtn>
          </SuggestRow>
        ))}
      </SuggestList>

      <Footer>
        <FooterText>
          소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관 · 위치 · 언어
        </FooterText>
        <Copyright>© 2025 INSTAGRAM CLONE</Copyright>
      </Footer>
    </MySideContainer>
  );
}
