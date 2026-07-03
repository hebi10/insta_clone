export const users = [
  {
    id: "user-1",
    username: "testuser",
    fullName: "김도윤",
    avatar: "https://picsum.photos/seed/avatar-testuser/150/150",
    bio: "일상, 작업 기록, 좋아하는 순간을 모아둡니다.\nNext.js로 만든 Instagram 클론 데모",
    website: "https://github.com/hebi10",
    postsCount: 12,
    followersCount: 3280,
    followingCount: 214,
    isFollowing: false,
    isOwnProfile: true,
    isVerified: false,
  },
  {
    id: "user-2",
    username: "film_archive",
    fullName: "Film Archive",
    avatar: "https://picsum.photos/seed/avatar-film/150/150",
    bio: "필름 사진과 도시 산책",
    website: "https://example.com/film",
    postsCount: 48,
    followersCount: 12400,
    followingCount: 188,
    isFollowing: true,
    isOwnProfile: false,
    isVerified: true,
  },
  {
    id: "user-3",
    username: "daily_table",
    fullName: "Daily Table",
    avatar: "https://picsum.photos/seed/avatar-table/150/150",
    bio: "집밥과 카페 기록",
    website: "https://example.com/table",
    postsCount: 87,
    followersCount: 8920,
    followingCount: 310,
    isFollowing: false,
    isOwnProfile: false,
    isVerified: false,
  },
  {
    id: "user-4",
    username: "seoul_walks",
    fullName: "Seoul Walks",
    avatar: "https://picsum.photos/seed/avatar-seoul/150/150",
    bio: "서울의 빛과 골목",
    website: "https://example.com/seoul",
    postsCount: 65,
    followersCount: 15600,
    followingCount: 122,
    isFollowing: true,
    isOwnProfile: false,
    isVerified: false,
  },
];

export const posts = [
  {
    id: "post-1",
    username: "film_archive",
    avatarUrl: users[1].avatar,
    imageUrl: "https://picsum.photos/seed/insta-post-1/1080/1080",
    description: "늦은 오후 빛이 좋아서 한 장 남겼어요.",
    likeCount: 1284,
    commentCount: 32,
    createdAt: "2026-07-01T09:20:00.000Z",
  },
  {
    id: "post-2",
    username: "daily_table",
    avatarUrl: users[2].avatar,
    imageUrl: "https://picsum.photos/seed/insta-post-2/1080/1080",
    description: "주말 브런치. 오늘은 천천히 먹기.",
    likeCount: 842,
    commentCount: 18,
    createdAt: "2026-07-01T11:10:00.000Z",
  },
  {
    id: "post-3",
    username: "seoul_walks",
    avatarUrl: users[3].avatar,
    imageUrl: "https://picsum.photos/seed/insta-post-3/1080/1080",
    description: "비 온 뒤 선명해진 거리.",
    likeCount: 2310,
    commentCount: 54,
    createdAt: "2026-06-30T16:35:00.000Z",
  },
  {
    id: "post-4",
    username: "testuser",
    avatarUrl: users[0].avatar,
    imageUrl: "https://picsum.photos/seed/insta-post-4/1080/1080",
    description: "포트폴리오용 인스타 클론 화면 다듬는 중.",
    likeCount: 512,
    commentCount: 11,
    createdAt: "2026-06-29T13:05:00.000Z",
  },
  {
    id: "post-5",
    username: "film_archive",
    avatarUrl: users[1].avatar,
    imageUrl: "https://picsum.photos/seed/insta-post-5/1080/1080",
    description: "기록해두면 다시 보고 싶은 장면.",
    likeCount: 1740,
    commentCount: 27,
    createdAt: "2026-06-28T08:45:00.000Z",
  },
  {
    id: "post-6",
    username: "daily_table",
    avatarUrl: users[2].avatar,
    imageUrl: "https://picsum.photos/seed/insta-post-6/1080/1080",
    description: "작은 접시들로 채운 저녁.",
    likeCount: 936,
    commentCount: 23,
    createdAt: "2026-06-27T10:15:00.000Z",
  },
];

export const exploreContent = Array.from({ length: 18 }, (_, index) => ({
  id: `explore-${index + 1}`,
  username: users[index % users.length].username,
  imageUrl: `https://picsum.photos/seed/explore-${index + 1}/600/600`,
  likeCount: 320 + index * 87,
  commentCount: 8 + index * 3,
  type: index % 5 === 0 ? "video" : "photo",
  createdAt: "2026-07-01T00:00:00.000Z",
}));

export const reels = [
  {
    id: "reel-1",
    username: "seoul_walks",
    avatar: users[3].avatar,
    description: "퇴근길 하늘 #서울 #산책",
    likeCount: 12400,
    commentCount: 182,
    isLiked: false,
    isFollowing: true,
  },
  {
    id: "reel-2",
    username: "daily_table",
    avatar: users[2].avatar,
    description: "아침 커피 루틴 #홈카페",
    likeCount: 7800,
    commentCount: 96,
    isLiked: true,
    isFollowing: false,
  },
  {
    id: "reel-3",
    username: "film_archive",
    avatar: users[1].avatar,
    description: "필름 느낌 보정 전후 #photo",
    likeCount: 15100,
    commentCount: 241,
    isLiked: false,
    isFollowing: false,
  },
];

export const notifications = [
  {
    id: "noti-1",
    type: "like",
    username: "film_archive",
    avatarUrl: users[1].avatar,
    message: "님이 회원님의 게시물을 좋아합니다.",
    timestamp: "2026-07-03T04:10:00.000Z",
    isRead: false,
    postImageUrl: posts[3].imageUrl,
  },
  {
    id: "noti-2",
    type: "follow",
    username: "daily_table",
    avatarUrl: users[2].avatar,
    message: "님이 회원님을 팔로우하기 시작했습니다.",
    timestamp: "2026-07-02T14:20:00.000Z",
    isRead: false,
    isFollowing: false,
  },
  {
    id: "noti-3",
    type: "comment",
    username: "seoul_walks",
    avatarUrl: users[3].avatar,
    message: "님이 댓글을 남겼습니다: 화면 진짜 인스타 같아요.",
    timestamp: "2026-07-01T18:00:00.000Z",
    isRead: true,
    postImageUrl: posts[3].imageUrl,
  },
];

export const chats = [
  {
    id: "chat-1",
    username: "film_archive",
    name: "Film Archive",
    avatar: users[1].avatar,
    lastMessage: "사진 그리드 간격 지금이 더 자연스러워요.",
    timestamp: "2026-07-03T03:40:00.000Z",
    unreadCount: 2,
    isOnline: true,
  },
  {
    id: "chat-2",
    username: "daily_table",
    name: "Daily Table",
    avatar: users[2].avatar,
    lastMessage: "피드 문구도 너무 길지 않게 가면 좋겠어요.",
    timestamp: "2026-07-02T22:20:00.000Z",
    unreadCount: 0,
    isOnline: false,
  },
  {
    id: "chat-3",
    username: "seoul_walks",
    name: "Seoul Walks",
    avatar: users[3].avatar,
    lastMessage: "모바일 하단 탭바 확인해볼게요.",
    timestamp: "2026-07-01T19:10:00.000Z",
    unreadCount: 1,
    isOnline: true,
  },
];

const chatMessages = {
  "chat-1": [
    {
      id: "msg-1",
      senderId: "user2",
      senderName: "Film Archive",
      message: "사진 그리드 간격 지금이 더 자연스러워요.",
      timestamp: "2026-07-03T03:32:00.000Z",
      type: "text",
    },
    {
      id: "msg-2",
      senderId: "user1",
      senderName: "김도윤",
      message: "피드 폭도 470px 기준으로 맞춰볼게요.",
      timestamp: "2026-07-03T03:35:00.000Z",
      type: "text",
    },
    {
      id: "msg-3",
      senderId: "user2",
      senderName: "Film Archive",
      message: "좋아요. 랜덤 데이터보다 고정 데이터가 포트폴리오에는 더 안정적이에요.",
      timestamp: "2026-07-03T03:40:00.000Z",
      type: "text",
    },
  ],
  "chat-2": [
    {
      id: "msg-4",
      senderId: "user3",
      senderName: "Daily Table",
      message: "피드 문구도 너무 길지 않게 가면 좋겠어요.",
      timestamp: "2026-07-02T22:20:00.000Z",
      type: "text",
    },
  ],
  "chat-3": [
    {
      id: "msg-5",
      senderId: "user4",
      senderName: "Seoul Walks",
      message: "모바일 하단 탭바 확인해볼게요.",
      timestamp: "2026-07-01T19:10:00.000Z",
      type: "text",
    },
  ],
};

export function findUser(username: string) {
  return users.find((user) => user.username === username) ?? users[0];
}

export function getUserPosts(username: string) {
  const selected = posts.filter((post) => post.username === username);
  return selected.length > 0 ? selected : posts.slice(0, 3);
}

export function getChat(chatId: string) {
  const chat = chats.find((item) => item.id === chatId) ?? chats[0];
  const user = users.find((item) => item.username === chat.username) ?? users[1];

  return {
    id: chat.id,
    username: chat.username,
    fullName: chat.name,
    avatarUrl: chat.avatar,
    isOnline: chat.isOnline,
    lastSeen: chat.timestamp,
    messages: chatMessages[chat.id as keyof typeof chatMessages] ?? [],
    user,
  };
}

export function searchMockData(query: string) {
  const normalized = query.trim().toLowerCase();
  const matchedUsers = normalized
    ? users.filter((user) =>
        [user.username, user.fullName, user.bio].some((value) =>
          value.toLowerCase().includes(normalized)
        )
      )
    : users;

  return {
    users: matchedUsers.map((user) => ({
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      avatar: user.avatar,
      isVerified: user.isVerified,
      followersCount: user.followersCount,
      bio: user.bio,
    })),
    hashtags: ["instagram", "daily", "photo", "seoul", "portfolio"]
      .filter((tag) => !normalized || tag.includes(normalized))
      .map((tag, index) => ({
        id: `tag-${tag}`,
        tag,
        postCount: 1200 + index * 430,
      })),
    places: [
      { id: "place-1", name: "Seoul", category: "City", postCount: 9800 },
      { id: "place-2", name: "Hapjeong", category: "Neighborhood", postCount: 2100 },
    ],
  };
}
