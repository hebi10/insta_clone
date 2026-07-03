'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchSearchResults } from '@/app/api/query';
import SafeImage from '@/app/_components/SafeImage';
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
  ResultInfo,
  ResultUsername,
  ResultName,
  RemoveButton,
  NoResultsMessage,
  PopularSection,
  PopularGrid,
  PopularItem,
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

interface SearchData {
  users: SearchResult[];
}

const recentItems: SearchResult[] = [
  { id: '1', username: 'film_archive', fullName: 'Film Archive', avatar: 'https://picsum.photos/seed/avatar-film/44/44', isVerified: true },
  { id: '2', username: 'daily_table', fullName: 'Daily Table', avatar: 'https://picsum.photos/seed/avatar-table/44/44' },
  { id: '3', username: 'seoul_walks', fullName: 'Seoul Walks', avatar: 'https://picsum.photos/seed/avatar-seoul/44/44' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState<SearchResult[]>([]);
  const [popularImages, setPopularImages] = useState<string[]>([]);

  const { data: searchData, isLoading } = useQuery<SearchData>({
    queryKey: ['search', searchQuery],
    queryFn: () => fetchSearchResults(searchQuery),
    enabled: searchQuery.trim().length > 0,
    staleTime: 30 * 1000,
  });

  useEffect(() => {
    setRecentSearches(recentItems);
    setPopularImages(
      Array.from({ length: 9 }, (_, index) => `https://picsum.photos/seed/explore-${index + 1}/120/120`)
    );
  }, []);

  const handleClearAllRecent = () => {
    setRecentSearches([]);
  };

  const handleRemoveRecent = (id: string) => {
    setRecentSearches((items) => items.filter((item) => item.id !== id));
  };

  return (
    <SearchModalOverlay isOpen={isOpen} onClick={onClose}>
      <SearchModalContainer isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        <SearchModalHeader>
          <SearchTitle>
            검색
            <MobileCloseButton type="button" aria-label="검색 닫기" onClick={onClose}>
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
              <ClearButton onClick={() => setSearchQuery('')}>
                <FiX />
              </ClearButton>
            )}
          </SearchInputContainer>
        </SearchModalHeader>

        <SearchContent>
          {!searchQuery ? (
            <>
              {recentSearches.length > 0 && (
                <RecentSection>
                  <SectionHeader>
                    <SectionTitle>최근 검색 항목</SectionTitle>
                    <ClearAllButton onClick={handleClearAllRecent}>모두 지우기</ClearAllButton>
                  </SectionHeader>
                  <SearchResultsList>
                    {recentSearches.map((item) => (
                      <SearchResultItem key={item.id} onClick={onClose}>
                        <SafeImage
                          src={item.avatar}
                          alt={item.username}
                          width={44}
                          height={44}
                          style={{ borderRadius: '50%' }}
                        />
                        <ResultInfo>
                          <ResultUsername>
                            {item.username}
                            {item.isVerified && ' · 인증됨'}
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

              <PopularSection>
                <SectionTitle>인기</SectionTitle>
                <PopularGrid>
                  {popularImages.map((image, index) => (
                    <PopularItem key={image}>
                      <SafeImage
                        src={image}
                        alt={`인기 게시물 ${index + 1}`}
                        width={100}
                        height={100}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </PopularItem>
                  ))}
                </PopularGrid>
              </PopularSection>
            </>
          ) : (
            <RecentSection>
              {searchData?.users && searchData.users.length > 0 ? (
                <SearchResultsList>
                  {searchData.users.map((item) => (
                    <SearchResultItem key={item.id} onClick={onClose}>
                      <SafeImage
                        src={item.avatar}
                        alt={item.username}
                        width={44}
                        height={44}
                        style={{ borderRadius: '50%' }}
                      />
                      <ResultInfo>
                        <ResultUsername>
                          {item.username}
                          {item.isVerified && ' · 인증됨'}
                        </ResultUsername>
                        <ResultName>{item.fullName}</ResultName>
                      </ResultInfo>
                    </SearchResultItem>
                  ))}
                </SearchResultsList>
              ) : isLoading ? (
                <NoResultsMessage>검색 중...</NoResultsMessage>
              ) : (
                <NoResultsMessage>{`"${searchQuery}"에 대한 결과를 찾을 수 없습니다.`}</NoResultsMessage>
              )}
            </RecentSection>
          )}
        </SearchContent>
      </SearchModalContainer>
    </SearchModalOverlay>
  );
}
