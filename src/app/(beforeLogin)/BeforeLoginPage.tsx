'use client';

import Image from "next/image";
import { ImageWrap, Wrap } from "./BeforeLoginPage.style";
import LoginForm from "./_components/LoginForm";
import LoginBottom from "../_components/LoginBottom";

export default function BeforeLoginPage() {
  return (
    <>
      <Wrap>
        <ImageWrap>
          <Image src="/images/image_lox.png" alt="로그인 메인 이미지" fill />
        </ImageWrap>
        <div className="login_form">
          <LoginForm />
        </div>
      </Wrap>
      <LoginBottom />
    </>
  );
}
