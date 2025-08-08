import { Session } from "next-auth";
import {
  MySideContainer,
  UserProfile,
  UserAvatar,
  UserInfo,
  UserName,
  UserEmail,
  SectionTitle,
  SeeAllButton,
  SuggestionsList,
  SuggestionItem,
  SuggestionAvatar,
  SuggestionInfo,
  SuggestionName,
  SuggestionDescription,
  FollowButton,
  FooterLinks,
  FooterText,
  Copyright
} from "./MySide.style";

interface MySideProps {
  session: Session | null;
}

export default function MySide({ session }: MySideProps) {
  const suggestions = [
    { id: 1, name: "coding_guru", description: "회원님을 위한 추천", avatar: "https://avatars.githubusercontent.com/u/72383308" },
    { id: 2, name: "design_master", description: "Instagram 신규 가입", avatar: "https://avatars.githubusercontent.com/u/23015613" },
    { id: 3, name: "tech_lover", description: "회원님을 위한 추천", avatar: "https://avatars.githubusercontent.com/u/30187475" },
    { id: 4, name: "creative_mind", description: "Instagram 신규 가입", avatar: "https://avatars.githubusercontent.com/u/1569817" },
    { id: 5, name: "art_enthusiast", description: "회원님을 위한 추천", avatar: "https://avatars.githubusercontent.com/u/98708081" },
  ];

  return (
    <MySideContainer>
      {/* 사용자 프로필 섹션 */}
      <UserProfile>
        <UserAvatar 
          src='/images/default-avatar.png'
          alt={`${session?.user?.name || 'User'}님의 프로필 사진`} 
        />
        <UserInfo>
          <UserName>{session?.user?.name || 'mockuser'}</UserName>
          <UserEmail>{session?.user?.email || 'test@test.com'}</UserEmail>
        </UserInfo>
      </UserProfile>

      {/* 추천 프로필 섹션 */}
      <SectionTitle>
        회원님을 위한 추천
        <SeeAllButton>모두 보기</SeeAllButton>
      </SectionTitle>

      <SuggestionsList>
        {suggestions.map((user) => (
          <SuggestionItem key={user.id}>
            <SuggestionAvatar src={user.avatar} alt={`${user.name}님의 프로필 사진`} />
            <SuggestionInfo>
              <SuggestionName>{user.name}</SuggestionName>
              <SuggestionDescription>{user.description}</SuggestionDescription>
            </SuggestionInfo>
            <FollowButton>팔로우</FollowButton>
          </SuggestionItem>
        ))}
      </SuggestionsList>

      {/* 푸터 링크 섹션 */}
      <FooterLinks>
        <FooterText>
          소개 · 도움말 · 홍보 센터 · API · 채용 정보 · 개인정보처리방침 · 약관 · 위치 · 언어 · Meta Verified
        </FooterText>
        <Copyright>© 2024 INSTAGRAM FROM META</Copyright>
      </FooterLinks>
    </MySideContainer>
  );
}