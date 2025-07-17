'use client';

import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchResults } from '@/app/api/query';
import {
  SearchModalOverlay,
  SearchModalContainer,
  SearchModalHeader,
  SearchTitle,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  ClearButton,
  MobileCloseButton,
  SearchContent,
  RecentSection,
  SectionHeader,
  SectionTitle,
  ClearAllButton,
  SearchResultsList,
  SearchResultItem,
  ResultAvatar,
  ResultInfo,
  ResultUsername,
  ResultName,
  RemoveButton,
  NoResultsMessage,
  PopularSection,
  PopularGrid,
  PopularItem,
  PopularImage,
} from './SearchModal.style';
import { FiSearch, FiX } from 'react-icons/fi';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  isVerified?: boolean;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const [popularImages, setPopularImages] = useState<string[]>([]);

  // 검색 API 호출
  const { data: searchData, isLoading } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => fetchSearchResults(searchQuery),
    enabled: searchQuery.trim().length > 0,
    staleTime: 30000, // 30초간 캐시 유지
  });

  // Mock 데이터 생성 (최근 검색 및 인기 이미지)
  useEffect(() => {
    const mockRecentSearches: SearchResult[] = [
      {
        id: '1',
        username: 'john_doe',
        fullName: 'John Doe',
        avatar: 'https://picsum.photos/seed/user1/40/40',
      },
      {
        id: '2',
        username: 'jane_smith',
        fullName: 'Jane Smith',
        avatar: 'https://picsum.photos/seed/user2/40/40',
      },
      {
        id: '3',
        username: 'design_studio',
        fullName: 'Design Studio',
        avatar: 'https://picsum.photos/seed/user3/40/40',
        isVerified: true,
      },
    ];
    setRecentSearches(mockRecentSearches);

    // 인기 이미지 생성 - 클라이언트에서만 실행
    const images = Array.from({ length: 9 }, (_, i) => 
      `https://picsum.photos/seed/popular-${i}/120/120`
    );
    setPopularImages(images);
  }, []);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleClearAllRecent = () => {
    setRecentSearches([]);
  };

  const handleRemoveRecent = (id: string) => {
    setRecentSearches(prev => prev.filter(item => item.id !== id));
  };

  const handleResultClick = (result: SearchResult) => {
    // 검색 결과 클릭 처리
    console.log('Selected:', result);
    onClose();
  };

  return (
    <SearchModalOverlay isOpen={isOpen} onClick={onClose}>
      <SearchModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <SearchModalHeader>
          <SearchTitle>
            검색
            <MobileCloseButton onClick={onClose}>
              <FiX />
            </MobileCloseButton>
          </SearchTitle>
          <SearchInputContainer>
            <SearchIcon>
              <FiSearch />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            {searchQuery && (
              <ClearButton onClick={handleClearSearch}>
                <FiX />
              </ClearButton>
            )}
          </SearchInputContainer>
        </SearchModalHeader>

        <SearchContent>
          {!searchQuery ? (
            <>
              {/* 최근 검색 */}
              {recentSearches.length > 0 && (
                <RecentSection>
                  <SectionHeader>
                    <SectionTitle>최근 검색 항목</SectionTitle>
                    <ClearAllButton onClick={handleClearAllRecent}>
                      모두 지우기
                    </ClearAllButton>
                  </SectionHeader>
                  <SearchResultsList>
                    {recentSearches.map((item) => (
                      <SearchResultItem 
                        key={item.id}
                        onClick={() => handleResultClick(item)}
                      >
                        <ResultAvatar src={item.avatar} alt={item.username} />
                        <ResultInfo>
                          <ResultUsername>
                            {item.username}
                            {item.isVerified && ' ✓'}
                          </ResultUsername>
                          <ResultName>{item.fullName}</ResultName>
                        </ResultInfo>
                        <RemoveButton 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveRecent(item.id);
                          }}
                        >
                          <FiX />
                        </RemoveButton>
                      </SearchResultItem>
                    ))}
                  </SearchResultsList>
                </RecentSection>
              )}

              {/* 인기 게시물 */}
              <PopularSection>
                <SectionTitle>인기</SectionTitle>
                <PopularGrid>
                  {popularImages.map((image, index) => (
                    <PopularItem key={index}>
                      <PopularImage src={image} alt={`인기 게시물 ${index + 1}`} />
                    </PopularItem>
                  ))}
                </PopularGrid>
              </PopularSection>
            </>
          ) : (
            /* 검색 결과 */
            <RecentSection>
              {searchData?.users && searchData.users.length > 0 ? (
                <SearchResultsList>
                  {searchData.users.map((item: any) => (
                    <SearchResultItem 
                      key={item.id}
                      onClick={() => handleResultClick(item)}
                    >
                      <ResultAvatar src={item.avatar} alt={item.username} />
                      <ResultInfo>
                        <ResultUsername>
                          {item.username}
                          {item.isVerified && ' ✓'}
                        </ResultUsername>
                        <ResultName>{item.fullName}</ResultName>
                      </ResultInfo>
                    </SearchResultItem>
                  ))}
                </SearchResultsList>
              ) : isLoading ? (
                <NoResultsMessage>검색 중...</NoResultsMessage>
              ) : (
                <NoResultsMessage>
                  "{searchQuery}"에 대한 결과를 찾을 수 없습니다.
                </NoResultsMessage>
              )}
            </RecentSection>
          )}
        </SearchContent>
      </SearchModalContainer>
    </SearchModalOverlay>
  );
}
