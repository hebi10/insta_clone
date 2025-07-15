'use client';

import Image from "next/image";
import { ForgotFlex, InputEvent, InputWrap, Legend, LineBox, LoginInput, SignUpFlex } from "./LoginForm.style";
import Link from "next/link";
import useInput from "@/app/hook/useInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";


export default function LoginForm() {
  const id = useInput();
  const password = useInput();
  const router = useRouter();
  const [message, setMessage] = useState('');

  const testLogin = () => {
    id.setValue('test@test.com');
    password.setValue('1234');
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    
    setMessage(''); // 기존 메시지 초기화
    
    console.log("=== NextAuth 로그인 시작 ===");
    console.log("로그인 시도:", { username: id.value, hasPassword: !!password.value });
    console.log("현재 URL:", window.location.href);
    
    try {
      console.log("NextAuth signIn 호출 중...");
      const result = await signIn("credentials", {
        username: id.value,
        password: password.value,
        redirect: false,
        callbackUrl: '/'
      });
      
      console.log("NextAuth signIn 결과:", result);
      
      if (result?.error) {
        console.log("❌ 로그인 실패:", result.error);
        setMessage('아이디와 비밀번호가 일치하지 않습니다.');
        id.reset();
        password.reset();
      } else if (result?.ok && result?.url) {
        console.log("✅ 로그인 성공, 리다이렉트:", result.url);
        router.replace('/');
      } else {
        console.log("⚠️ 예상치 못한 결과:", result);
        // 일단 성공으로 처리
        router.replace('/');
      }
    } catch (err) {
      console.error('❌ NextAuth 로그인 에러:', err);
      if (err instanceof Error) {
        console.error('에러 메시지:', err.message);
        console.error('에러 스택:', err.stack);
      }
      setMessage('로그인 중 오류가 발생했습니다.');
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
          {message === "" ? null : <div style={{ color: 'red', textAlign: 'center' , marginTop: '12px' }}>{message}</div>}
        </InputWrap>
      </form>
      <LineBox>
        <em>또는</em>
      </LineBox>
      <div>
        <ForgotFlex flex pt={16} pb={16} justify={"center"} style={{cursor: 'pointer'}} onClick={testLogin} >테스트 계정 로그인 입력 버튼</ForgotFlex>
        <ForgotFlex flex pt={16} pb={16} justify={"center"} ><Link href="/accounts/password/reset">비밀번호를 잊어버리셨나요?</Link></ForgotFlex>
        <SignUpFlex flex pt={16} pb={16} justify={"center"} ><p>계정이 없으신가요?</p><Link href="/accounts/emailsignup">가입하기</Link></SignUpFlex>
      </div>
    </>
  );
}