import { FlexContainer } from "@/app/_styles/module.style";
import { BottomFlexContainer, BottomWrap } from "./LoginBottom.style";

export default function LoginBottom() {
  return (
    <BottomWrap flex direction="column">
      <BottomFlexContainer as="ul" flex justify="center">
        <li><a href="#">Meta</a></li>
        <li><a href="#">소개</a></li>
        <li><a href="#">블로그</a></li>
        <li><a href="#">채용 정보</a></li>
        <li><a href="#">도움말</a></li>
        <li><a href="#">API</a></li>
        <li><a href="#">개인정보처리방침</a></li>
        <li><a href="#">약관</a></li>
        <li><a href="#">위치</a></li>
        <li><a href="#">Instagram Lite</a></li>
        <li><a href="#">Threads</a></li>
        <li><a href="#">연락처 업로드 & 비사용자</a></li>
        <li><a href="#">Meta Verified</a></li>
      </BottomFlexContainer>
      <FlexContainer flex as="p" justify="center" mt={12}>
        <span>© 2025 Instagram from Meta</span>
      </FlexContainer>
    </BottomWrap>
  );
}