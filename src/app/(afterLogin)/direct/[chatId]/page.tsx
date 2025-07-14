interface Props {
  params: { chatId: string };
}

export default function ChatPage({ params }: Props) {
  return <div>{params.chatId}번 채팅</div>;
}
