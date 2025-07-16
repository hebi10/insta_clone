// 모든 query 함수들을 한 곳에서 export

export { fetchPosts } from './posts';
export { fetchReels } from './reels';
export { fetchExploreContent } from './explore';
export { fetchNotifications } from './notifications';
export { fetchChats, fetchChatDetails } from './chats';
export { 
  fetchUserProfile, 
  fetchUserPosts, 
  fetchUserSavedPosts, 
  fetchUserTaggedPosts 
} from './users';

// 검색 관련 API 함수
export async function fetchSearchResults(query: string) {
  const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error('Failed to search');
  const data = await response.json();
  return {
    users: data.users ?? [],
    hashtags: data.hashtags ?? [],
    places: data.places ?? [],
  };
}
