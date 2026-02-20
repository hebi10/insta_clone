import styled from 'styled-components';

export const SearchModalOverlay = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100dvh;
  background-color: transparent; /* 배경 투명 */
  z-index: 50; /* LeftArea(z-index: 100)보다 낮게 */
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: flex-start;
  justify-content: flex-start;
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  
  /* 모바일에서는 배경을 어둡게 */
  @media ${props => props.theme.media.mobile} {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1001; /* 하단 탭바보다 위에 */
  }
`;

export const SearchModalContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
  position: fixed;
  left: 72px;
  top: 0;
  width: 397px;
  height: 100dvh;
  background-color: #ffffff;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.15);
  border-radius: 0 16px 16px 0;
  display: flex;
  flex-direction: column;
  z-index: 51; /* LeftArea보다 낮지만 Overlay보다는 높게 */
  pointer-events: all; /* 모달 컨테이너는 클릭 가능 */
  
  /* 슬라이드 애니메이션 */
  transform: translateX(${props => props.isOpen ? '0' : '-100%'});
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @media ${props => props.theme.media.mobile} {
    width: 100%;
    left: 0;
    padding-bottom: 60px;
    border-radius: 0;
    box-shadow: none;
    z-index: 1002; /* 오버레이보다 위에 */
    transform: translateY(${props => props.isOpen ? '0' : '100%'});
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export const SearchModalHeader = styled.div`
  padding: 12px 0 8px 0;
  border-bottom: 1px solid #dbdbdb;
  position: relative;
`;

export const MobileCloseButton = styled.button`
  display: none;
  
  @media ${props => props.theme.media.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    cursor: pointer;
    color: #262626;
      background-color: #f5f5f5;
      border-radius: 50%;
    
    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const SearchTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 600;
  color: #262626;
  margin: 0;
  padding: 20px 24px 16px 24px;
`;

export const SearchInputContainer = styled.div`
  position: relative;
  margin: 0 16px 8px 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: #efefef;
  padding: 3px 16px 3px 40px;
  font-size: 14px;
  color: #262626;
  box-sizing: border-box;
  
  &::placeholder {
    color: #8e8e8e;
  }
  
  &:focus {
    outline: none;
    background-color: #ffffff;
    border: 1px solid #dbdbdb;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #8e8e8e;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const ClearButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #8e8e8e;
  }
`;

export const SearchContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
`;

export const RecentSection = styled.div`
  padding: 16px 0;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin-bottom: 16px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #262626;
  margin: 0;
`;

export const ClearAllButton = styled.button`
  background: none;
  border: none;
  color: #0095f6;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    color: #00376b;
  }
`;

export const SearchResultsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchResultItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 24px;
  cursor: pointer;
  transition: background-color 0.1s ease;
  
  &:hover {
    background-color: #fafafa;
  }
`;

export const ResultAvatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 12px;
`;

export const ResultInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const ResultUsername = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 2px;
`;

export const ResultName = styled.div`
  font-size: 14px;
  color: #8e8e8e;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  svg {
    width: 16px;
    height: 16px;
    color: #8e8e8e;
  }
`;

export const NoResultsMessage = styled.div`
  padding: 32px 24px;
  text-align: center;
  color: #8e8e8e;
  font-size: 14px;
`;

export const PopularSection = styled.div`
  padding: 0 24px;
  margin-top: 24px;
`;

export const PopularGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  margin-top: 16px;
`;

export const PopularItem = styled.div`
  position: relative;
  aspect-ratio: 1;
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  
  &:hover {
    opacity: 0.8;
  }
`;

export const PopularImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
