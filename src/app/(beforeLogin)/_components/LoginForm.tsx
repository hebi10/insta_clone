import Image from "next/image";
import { ForgotFlex, InputEvent, InputWrap, Legend, LineBox, LoginInput, SignUpFlex } from "./LoginForm.style";
import { FlexContainer } from "@/app/_styles/module.style";
import Link from "next/link";


export default function LoginForm() {
  return (
    <>
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
      <LineBox>
        <em>또는</em>
      </LineBox>
      <div>
        <ForgotFlex flex pt={16} pb={16} justify={"center"} ><Link href="/accounts/password/reset">비밀번호를 잊어버리셨나요?</Link></ForgotFlex>
        <SignUpFlex flex pt={16} pb={16} justify={"center"} ><p>계정이 없으신가요?</p><Link href="/accounts/emailsignup">가입하기</Link></SignUpFlex>
      </div>
    </>
  );
}