import styled from 'styled-components';

export const MySideContainer = styled.div`
  padding: 20px 0;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  padding: 16px 0;
`;

export const UserAvatar = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const UserInfo = styled.div`
  flex: 1;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 2px;
`;

export const UserEmail = styled.div`
  font-size: 12px;
  color: #8e8e8e;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: #8e8e8e;
  margin-bottom: 12px;
`;

export const SeeAllButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: #262626;
  font-weight: 600;
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    color: #8e8e8e;
  }
`;

export const SuggestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
`;

export const SuggestionAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  object-fit: cover;
`;

export const SuggestionInfo = styled.div`
  flex: 1;
`;

export const SuggestionName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 2px;
`;

export const SuggestionDescription = styled.div`
  font-size: 12px;
  color: #8e8e8e;
`;

export const FollowButton = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: #0095f6;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    color: #00376b;
  }
`;

export const FooterLinks = styled.div`
  margin-top: 32px;
  padding-top: 16px;
  border-top: 1px solid #efefef;
`;

export const FooterText = styled.div`
  font-size: 11px;
  color: #c7c7c7;
  line-height: 13px;
  margin-bottom: 8px;
`;

export const Copyright = styled.div`
  font-size: 11px;
  color: #c7c7c7;
  margin-top: 16px;
`;
