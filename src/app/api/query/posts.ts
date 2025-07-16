// 게시물 관련 API 함수들

export async function fetchPosts() {
  const response = await fetch('/api/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  const data = await response.json();
  return (data.posts ?? []);
}
