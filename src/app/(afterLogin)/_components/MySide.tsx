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
  { id: 1, name: "j_movie_log", desc: "회원님을 위한 추천" },
  { id: 2, name: "daily_baking_", desc: "Instagram 신규 가입" },
  { id: 3, name: "hiking._.seoul", desc: "회원님을 위한 추천" },
  { id: 4, name: "ux_soojin", desc: "design_ref_kr 님 외 3명이 팔로우합니다" },
  { id: 5, name: "eat_repeat_kr", desc: "Instagram 신규 가입" },
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
              src='/images/default-avatar.png'
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