interface Props {
  params: { username: string };
}

export default function UserPage({ params }: Props) {
  return <div>{params.username}님의 프로필</div>;
}
