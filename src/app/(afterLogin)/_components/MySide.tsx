import { Session } from "next-auth";
import SafeImage from '@/app/_components/SafeImage';
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
    { 
      id: 1, 
      name: "coding_guru", 
      description: "회원님을 위한 추천", 
      avatar: "https://picsum.photos/seed/coding_guru/150/150" 
    },
    { 
      id: 2, 
      name: "design_master", 
      description: "Instagram 신규 가입", 
      avatar: "https://picsum.photos/seed/design_master/150/150" 
    },
    { 
      id: 3, 
      name: "tech_lover", 
      description: "회원님을 위한 추천", 
      avatar: "https://picsum.photos/seed/tech_lover/150/150" 
    },
    { 
      id: 4, 
      name: "creative_mind", 
      description: "Instagram 신규 가입", 
      avatar: "https://picsum.photos/seed/creative_mind/150/150" 
    },
    { 
      id: 5, 
      name: "art_enthusiast", 
      description: "회원님을 위한 추천", 
      avatar: "https://picsum.photos/seed/art_enthusiast/150/150" 
    },
  ];

  return (
    <MySideContainer>
      {/* 사용자 프로필 섹션 */}
      <UserProfile>
        <SafeImage
          src='/images/default-avatar.png'
          alt={`${session?.user?.name || 'User'}님의 프로필 사진`}
          width={56}
          height={56}
          style={{ borderRadius: '50%' }}
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
            <SafeImage
              src={user.avatar}
              alt={`${user.name}님의 프로필 사진`}
              width={32}
              height={32}
              style={{ borderRadius: '50%' }}
            />
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