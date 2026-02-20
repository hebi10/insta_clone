import styled from 'styled-components';

export const MySideContainer = styled.div`
  padding: 18px 0;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 0;
  gap: 14px;
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
`;

export const UserEmail = styled.div`
  font-size: 13px;
  color: #8e8e8e;
  margin-top: 2px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  span {
    font-size: 14px;
    font-weight: 600;
    color: #8e8e8e;
  }
`;

export const SeeAllBtn = styled.button`
  background: none;
  border: none;
  font-size: 12px;
  color: #262626;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    color: #8e8e8e;
  }
`;

export const SuggestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SuggestRow = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0;
  gap: 10px;
`;

export const SuggestInfo = styled.div`
  flex: 1;
  min-width: 0;

  .name {
    font-size: 14px;
    font-weight: 600;
    color: #262626;
  }
  .desc {
    font-size: 12px;
    color: #8e8e8e;
    margin-top: 1px;
  }
`;

export const FollowBtn = styled.button`
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

export const Footer = styled.div`
  margin-top: 28px;
  padding-top: 14px;
`;

export const FooterText = styled.div`
  font-size: 11px;
  color: #c7c7c7;
  line-height: 16px;
  word-spacing: 1px;
`;

export const Copyright = styled.div`
  font-size: 11px;
  color: #c7c7c7;
  margin-top: 12px;
`;
