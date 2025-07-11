import { FlexContainer } from "@/app/_styles/module.style";
import { BottomFlexContainer, BottomWrap } from "./LoginBottom.style";
import Link from "next/link";

export default function LoginBottom() {
  return (
    <BottomWrap flex direction="column">
      <BottomFlexContainer as="ul" flex justify="center">
        <li><Link href="#">Meta</Link></li>
        <li><Link href="#">소개</Link></li>
        <li><Link href="#">블로그</Link></li>
        <li><Link href="#">채용 정보</Link></li>
        <li><Link href="#">도움말</Link></li>
        <li><Link href="#">API</Link></li>
        <li><Link href="#">개인정보처리방침</Link></li>
        <li><Link href="#">약관</Link></li>
        <li><Link href="#">위치</Link></li>
        <li><Link href="#">Instagram Lite</Link></li>
        <li><Link href="#">Threads</Link></li>
        <li><Link href="#">연락처 업로드 & 비사용자</Link></li>
        <li><Link href="#">Meta Verified</Link></li>
      </BottomFlexContainer>
      <FlexContainer flex as="p" justify="center" mt={12}>
        <span>© 2025 Instagram from Meta</span>
      </FlexContainer>
    </BottomWrap>
  );
}