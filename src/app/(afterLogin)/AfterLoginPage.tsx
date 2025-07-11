import FeedItem from "./_components/feed";
import { Main } from "./AfterLoginPage.style";

const dummyData = [
  {
    username: 'haebi.dev',
    imageUrl: 'https://placehold.co/600x400',
    description: '오늘도 개발하는 하루 🧑‍💻'
  },
  {
    username: 'daily.cat',
    imageUrl: 'https://placehold.co/600x400',
    description: '냥냥펀치 발사!'
  },
  {
    username: 'daily.cat',
    imageUrl: 'https://placehold.co/600x400',
    description: '냥냥펀치 발사!'
  },
  {
    username: 'daily.cat',
    imageUrl: 'https://placehold.co/600x400',
    description: '냥냥펀치 발사!'
  },
  {
    username: 'daily.cat',
    imageUrl: 'https://placehold.co/600x400',
    description: '냥냥펀치 발사!'
  }
];

export default function AfterLoginPage() {
  return (
    <Main>
      {dummyData.map((item, idx) => (
        <FeedItem
          key={idx}
          username={item.username}
          imageUrl={item.imageUrl}
          description={item.description}
        />
      ))}
    </Main>
  );
}
