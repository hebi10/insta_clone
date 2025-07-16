// 탐색 페이지 관련 API 함수들

export async function fetchExploreContent() {
  const response = await fetch('/api/explore');
  if (!response.ok) throw new Error('Failed to fetch explore content');
  const data = await response.json();
  return data.explorePosts || [];
}
