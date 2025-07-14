import FeedItem from "./_components/feed";
import LeftSide from "./_components/leftSide";
import { Main, LeftArea, ContentArea } from "./AfterLoginPage.style";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";

interface Post {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

export default function AfterLoginPage() {
  const dummyData: Post[] = useMemo(
    () =>
      Array.from({ length: 5 }).map(() => ({
        username: faker.internet.userName(),
        avatarUrl: faker.image.avatar(),
        imageUrl: faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
        description: faker.lorem.sentence(),
        likeCount: faker.number.int({ min: 1, max: 5000 }),
        commentCount: faker.number.int({ min: 1, max: 200 }),
      })),
    []
  );
  return (
    <Main>
      <LeftArea>
        <LeftSide />
      </LeftArea>
      <ContentArea>
        {dummyData.map((item, idx) => (
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
