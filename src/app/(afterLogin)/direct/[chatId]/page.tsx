interface Props {
  params: { chatId: string };
}

export default function ChatPage({ params }: Props) {
  return (
    <div style={{ padding: '20px' }}>
      <h2>{`채팅 ${params.chatId} (준비 중)`}</h2>
    </div>
  );
}
