interface Props {
  params: { username: string };
}

export default function ProfilePage({ params }: Props) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{`${params.username} 프로필 페이지 (준비 중)`}</h2>
    </div>
  );
}
