import FeedItem from "./_components/feed";
import { Main } from "./AfterLoginPage.style";
import { faker } from "@faker-js/faker";
import { useMemo } from "react";

interface Post {
  username: string;
  avatarUrl: string;
  imageUrl: string;
  description: string;
}

export default function AfterLoginPage() {
  const dummyData: Post[] = useMemo(
    () =>
      Array.from({ length: 5 }).map(() => ({
        username: faker.internet.userName(),
        avatarUrl: faker.image.avatar(),
        imageUrl: faker.image.urlPicsumPhotos({ width: 600, height: 400 }),
        description: faker.lorem.sentence(),
      })),
    []
  );
  return (
    <Main>
      {dummyData.map((item, idx) => (
        <FeedItem
          key={idx}
          username={item.username}
          avatarUrl={item.avatarUrl}
          imageUrl={item.imageUrl}
          description={item.description}
        />
      ))}
    </Main>
  );
}
