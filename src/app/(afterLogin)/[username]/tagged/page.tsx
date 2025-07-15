interface Props {
  params: Promise<{ username: string }>;
}

export default async function TaggedPage({ params }: Props) {
  const resolvedParams = await params;
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>{`${resolvedParams.username}의 태그된 게시물 (준비 중)`}</h2>
    </div>
  );
}
