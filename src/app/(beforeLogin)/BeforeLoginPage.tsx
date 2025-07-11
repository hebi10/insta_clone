import Image from "next/image";
import { ImageWrap, InputEvent, InputWrap, Legend, LoginInput, Wrap } from "./BeforeLoginPage.style";

export default function BeforeLoginPage() {
  return (
    <Wrap>
      <ImageWrap>
        <Image src="/images/image_lox.png" alt="로그인 메인 이미지" fill />
      </ImageWrap>
      <div className="login_form">
        <form>
          <Legend><Image src="/images/icon_logo.png" alt="로고 아이콘" fill /></Legend>
          <InputWrap>
            <InputEvent>
              <LoginInput type="text" placeholder=" " />
              <span>전화번호, 사용자 이름 또는 이메일</span>
            </InputEvent>
            <InputEvent>
              <LoginInput type="password" placeholder=" " />
              <span>비밀번호</span>
            </InputEvent>
            <button type="submit">로그인</button>
          </InputWrap>
        </form>
        <div>
          <span>계정이 없으신가요? </span>
          <a href="#" role="button">가입하기</a>
        </div>
      </div>
    </Wrap>
  );
}
