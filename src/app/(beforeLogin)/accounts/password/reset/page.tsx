"use client";
import React from 'react';
import { BackToLogin, Button, Container, ContainerBox, CreateAccount, Desc, Divider, DividerArea, IconArea, Inner, Input, LockIcon, Or, SmallLink, Title } from './page.style';
import LoginBottom from '@/app/_components/LoginBottom';
import LoginHeader from '@/app/(beforeLogin)/_components/LoginHeader';

export default function ForgotPasswordForm() {
  return (
    <>
      <LoginHeader />
      <ContainerBox>
        <Container>
          <Inner>
            <IconArea>
              <LockIcon />
            </IconArea>
            <Title>로그인에 문제가 있나요?</Title>
            <Desc>
              이메일 주소, 전화번호 또는 사용자 이름을 입력하시면<br />
              계정에 다시 액세스할 수 있는 링크를 보내드립니다.
            </Desc>
            <Input type="text" placeholder="이메일, 전화번호, 사용자 이름" />
            <Button disabled>로그인 링크 보내기</Button>
            <SmallLink>비밀번호를 재설정할 수 없나요?</SmallLink>
            <DividerArea>
              <Divider />
              <Or>또는</Or>
              <Divider />
            </DividerArea>
            <CreateAccount>새 계정 만들기</CreateAccount>
          </Inner>
          <BackToLogin>로그인으로 돌아가기</BackToLogin>
        </Container>
      </ContainerBox>
      <LoginBottom />
    </>
  );
}
