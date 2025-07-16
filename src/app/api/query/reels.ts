// 릴스 관련 API 함수들

export async function fetchReels() {
  const response = await fetch('/api/reels');
  if (!response.ok) throw new Error('Failed to fetch reels');
  const data = await response.json();
  return data.reels || [];
}
