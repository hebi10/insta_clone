// 사용자 관련 API 함수들

export async function fetchUserProfile(username: string) {
  const response = await fetch(`/api/users/${username}`);
  if (!response.ok) throw new Error('Failed to fetch user profile');
  const data = await response.json();
  return data.user ?? null;
}

export async function fetchUserPosts(username: string) {
  const response = await fetch(`/api/users/${username}/posts`);
  if (!response.ok) throw new Error('Failed to fetch user posts');
  const data = await response.json();
  return data.posts ?? [];
}

export async function fetchUserSavedPosts(username: string) {
  const response = await fetch(`/api/users/${username}/saved`);
  if (!response.ok) throw new Error('Failed to fetch saved posts');
  const data = await response.json();
  return data.posts ?? [];
}

export async function fetchUserTaggedPosts(username: string) {
  const response = await fetch(`/api/users/${username}/tagged`);
  if (!response.ok) throw new Error('Failed to fetch tagged posts');
  const data = await response.json();
  return data.posts ?? [];
}
