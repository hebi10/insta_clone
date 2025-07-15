interface Props {
  params: Promise<{ username: string }>;
}

export default async function ProfilePage({ params }: Props) {
  const resolvedParams = await params;
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>{`${resolvedParams.username} 프로필 페이지 (준비 중)`}</h2>
    </div>
  );
}
