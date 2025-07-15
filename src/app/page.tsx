"use client";
import { useSession } from "next-auth/react";
import BeforeLoginPage from './(beforeLogin)/BeforeLoginPage';
import { Loading, LoadingImage } from "./page.style";
import Image from "next/image";
import AfterLoginPage from "./(afterLogin)/AfterLoginPage";

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Loading>
        <LoadingImage>
          <Image src="/images/img_loading.png" alt="로딩중..." fill />
        </LoadingImage>
      </Loading>
    );
  }

  if (session) {
    return <AfterLoginPage />;
  }

  return <BeforeLoginPage />;
}
