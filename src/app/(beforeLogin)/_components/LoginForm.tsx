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
    setMessage('');
    
    try {
      const result = await signIn("credentials", {
        username: id.value,
        password: password.value,
        redirect: false,
        callbackUrl: '/'
      });
      
      if (result?.error) {
        setMessage('아이디와 비밀번호가 일치하지 않습니다.');
        id.reset();
        password.reset();
      } else if (result?.ok) {
        router.replace('/');
      }
    } catch (err) {
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
        <ForgotFlex flex pt={8} pb={8} justify={"center"} style={{cursor: 'pointer'}} onClick={testLogin} >테스트 계정 로그인 입력 버튼</ForgotFlex>
        <ForgotFlex flex pt={8} pb={8} justify={"center"} >
          <a 
            href="https://www.inflearn.com/course/next-react-query-sns%EC%84%9C%EB%B9%84%EC%8A%A4?cid=332503" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0095f6', fontWeight: 600, fontSize: '13px' }}
          >
            인프런 강의 클론코딩 프로젝트입니다 &rarr;
          </a>
        </ForgotFlex>
                <ForgotFlex flex pt={8} pb={8} justify={"center"} >
          <a 
            href="https://github.com/hebi10/insta_clone" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#0095f6', fontWeight: 600, fontSize: '13px' }}
          >
            Github &rarr;
          </a>
        </ForgotFlex>
        <ForgotFlex flex pt={8} pb={8} justify={"center"} ><Link href="/accounts/password/reset">비밀번호를 잊어버리셨나요?</Link></ForgotFlex>
        <SignUpFlex flex pt={8} pb={16} justify={"center"} ><p>계정이 없으신가요?</p><Link href="/accounts/emailsignup">가입하기</Link></SignUpFlex>
      </div>
    </>
  );
}