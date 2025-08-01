'use client';

import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import {
  SearchModalOverlay,
  SearchModalContainer,
  SearchModalHeader,
  SearchTitle,
  SearchInputContainer,
  SearchInput,
  SearchIcon,
  ClearButton,
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
  name: string;
  avatar: string;
  isVerified?: boolean;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Mock 데이터 생성
  useEffect(() => {
    const mockRecentSearches: SearchResult[] = [
      {
        id: '1',
        username: 'john_doe',
        name: 'John Doe',
        avatar: 'https://avatars.githubusercontent.com/u/12345',
      },
      {
        id: '2',
        username: 'jane_smith',
        name: 'Jane Smith',
        avatar: 'https://avatars.githubusercontent.com/u/67890',
      },
      {
        id: '3',
        username: 'design_studio',
        name: 'Design Studio',
        avatar: 'https://avatars.githubusercontent.com/u/11111',
        isVerified: true,
      },
    ];
    setRecentSearches(mockRecentSearches);
  }, []);

  // 검색 로직
  useEffect(() => {
    if (searchQuery.trim()) {
      // Mock 검색 결과
      const mockResults: SearchResult[] = Array.from({ length: 8 }, (_, i) => ({
        id: `result-${i}`,
        username: `${searchQuery}_user${i + 1}`,
        name: `User ${i + 1}`,
        avatar: `https://avatars.githubusercontent.com/u/${22222 + i}`,
        isVerified: i % 3 === 0, // 일정한 패턴으로 verified 상태 결정
      }));
      setSearchResults(mockResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

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

  const popularImages = [
    'https://picsum.photos/120/120?random=1',
    'https://picsum.photos/120/120?random=2', 
    'https://picsum.photos/120/120?random=3',
    'https://picsum.photos/120/120?random=4',
    'https://picsum.photos/120/120?random=5',
    'https://picsum.photos/120/120?random=6',
    'https://picsum.photos/120/120?random=7',
    'https://picsum.photos/120/120?random=8',
    'https://picsum.photos/120/120?random=9',
  ];

  return (
    <SearchModalOverlay isOpen={isOpen} onClick={onClose}>
      <SearchModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <SearchModalHeader>
          <SearchTitle>검색</SearchTitle>
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
                          <ResultName>{item.name}</ResultName>
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
              {searchResults.length > 0 ? (
                <SearchResultsList>
                  {searchResults.map((item) => (
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
                        <ResultName>{item.name}</ResultName>
                      </ResultInfo>
                    </SearchResultItem>
                  ))}
                </SearchResultsList>
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
