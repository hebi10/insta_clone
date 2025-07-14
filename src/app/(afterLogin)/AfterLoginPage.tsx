import FeedItem from "./_components/feed";
import LeftSide from "./_components/leftSide";
import { Main, LeftArea, ContentArea } from "./AfterLoginPage.style";
import { useQuery } from '@tanstack/react-query';

interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('/api/posts');
  const data = await res.json();
  return (data.posts ?? []) as Post[];
}

export default function AfterLoginPage() {
  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });
  return (
    <Main>
      <LeftArea>
        <LeftSide />
      </LeftArea>
      <ContentArea>
        {posts.map((item, idx) => (
          <FeedItem
            key={idx}
            username={item.username}
            avatarUrl={item.avatarUrl}
            imageUrl={item.imageUrl}
            description={item.description}
            likeCount={item.likeCount}
            commentCount={item.commentCount}
          />
        ))}
      </ContentArea>
    </Main>
  );
}
