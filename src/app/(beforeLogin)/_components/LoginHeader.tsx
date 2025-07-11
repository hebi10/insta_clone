"use client";

import Link from 'next/link';
import * as S from './LoginHeader.style';
import Image from 'next/image';

export default function LoginHeader() {
  return (
    <S.Nav>
      <S.Inner>
        <S.ImgWrap>
          <Link href="/"><Image src="/images/icon_logo.png" alt="로고 아이콘" fill /></Link>
        </S.ImgWrap>
        <S.Actions>
          <S.LoginButton>로그인</S.LoginButton>
          <S.JoinLink href="#">가입하기</S.JoinLink>
        </S.Actions>
      </S.Inner>
    </S.Nav>
  );
}
