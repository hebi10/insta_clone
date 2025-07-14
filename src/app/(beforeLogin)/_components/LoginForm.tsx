import Image from "next/image";
import { ForgotFlex, InputEvent, InputWrap, Legend, LineBox, LoginInput, SignUpFlex } from "./LoginForm.style";
import Link from "next/link";
import useInput from "@/app/hook/useInput";
import { signIn } from "next-auth/react";


export default function LoginForm() {
  const id = useInput();
  const password = useInput();

  const testLogin = () => {
    id.setValue('test@test.com');
    password.setValue('1234');
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = await signIn("credentials", {
      redirect: false,
      email: id.value,
      password: password.value,
    });

    if (result?.ok) {
      window.location.href = "/";
    } else {
      alert("로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.");
      id.reset();
      password.reset();
    }
  };
  
  return (
    <>
      <form onSubmit={onSubmit}>
        <Legend><Image src="/images/icon_logo.png" alt="로고 아이콘" fill /></Legend>
        <InputWrap>
          <InputEvent>
            <LoginInput type="text" placeholder=" " value={id.value} onChange={id.onChange} />
            <span>전화번호, 사용자 이름 또는 이메일</span>
          </InputEvent>
          <InputEvent>
            <LoginInput type="password" placeholder=" " value={password.value} onChange={password.onChange} />
            <span>비밀번호</span>
          </InputEvent>
          <button type="submit">로그인</button>
        </InputWrap>
      </form>
      <LineBox>
        <em>또는</em>
      </LineBox>
      <div>
        <ForgotFlex flex pt={16} pb={16} justify={"center"} onClick={testLogin} >테스트 계정 로그인 입력 버튼</ForgotFlex>
        <ForgotFlex flex pt={16} pb={16} justify={"center"} ><Link href="/accounts/password/reset">비밀번호를 잊어버리셨나요?</Link></ForgotFlex>
        <SignUpFlex flex pt={16} pb={16} justify={"center"} ><p>계정이 없으신가요?</p><Link href="/accounts/emailsignup">가입하기</Link></SignUpFlex>
      </div>
    </>
  );
}