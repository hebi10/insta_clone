interface Props {
  params: Promise<{ chatId: string }>;
}

export default async function ChatPage({ params }: Props) {
  const resolvedParams = await params;
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>{`채팅 ${resolvedParams.chatId} (준비 중)`}</h2>
    </div>
  );
}
