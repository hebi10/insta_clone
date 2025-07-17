import Link from "next/link";
import { FlexContainer } from "./_styles/module.style";

export default function NotFound() {
  return (
    <FlexContainer flex direction="column" align="center" justify="center" style={{ height: "100dvh", textAlign: "center", gap: "16px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>죄송합니다. 페이지를 사용할 수 없습니다.</h1>
      <p>클릭하신 링크가 잘못되었거나 페이지가 삭제되었습니다.</p>
      <Link href="/" style={{ marginTop: "16px", fontWeight: "bold" }}>[<em style={{ color: "#0095f6" }}>홈화면</em>으로 돌아가기]</Link>
    </FlexContainer>
  );
}