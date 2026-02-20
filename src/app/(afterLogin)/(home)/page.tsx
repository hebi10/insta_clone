"use client";
import FeedItem from "../_components/feed";
import MySide from "../_components/MySide";
import { Main, ContentArea, LeftList, RightArea } from "./page.style";
import { useQuery } from '@tanstack/react-query';
import { useSession } from "next-auth/react";
import { fetchPosts } from '@/app/api/query';

interface Post {
  id: string;
  username: string;
  avatarUrl: string;
  imageUrl: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

export default function AfterLoginPage() {
  const { data: session } = useSession();

  const { data: posts = [], isLoading } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 10,
    gcTime: 1000 * 60 * 10,
  });

  if (isLoading && posts.length === 0) {
    return (
      <Main>
        <ContentArea>
          <LeftList>
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#8e8e8e' }}>
              게시물을 불러오는 중...
            </div>
          </LeftList>
          <RightArea>
            <MySide session={session} />
          </RightArea>
        </ContentArea>
      </Main>
    );
  }

  return (
    <Main>
      <ContentArea>
        <LeftList>
          {posts.map((item) => (
            <FeedItem
              key={item.id}
              username={item.username}
              avatarUrl={item.avatarUrl}
              imageUrl={item.imageUrl}
              description={item.description}
              likeCount={item.likeCount}
              commentCount={item.commentCount}
            />
          ))}
        </LeftList>
        <RightArea>
          <MySide session={session} />
        </RightArea>
      </ContentArea>
    </Main>
  );
}
