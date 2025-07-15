import { auth } from "@/auth";

export default async function ServerUserInfo() {
  // 서버사이드에서 쿠키로부터 세션 데이터 가져오기
  const session = await auth();

  if (!session) {
    return <div>로그인이 필요합니다.</div>;
  }

  return (
    <div>
      <h3>서버에서 가져온 사용자 정보</h3>
      <p>이름: {session.user?.name}</p>
      <p>이메일: {session.user?.email}</p>
      <p>사용자 ID: {session.user?.id}</p>
    </div>
  );
}
