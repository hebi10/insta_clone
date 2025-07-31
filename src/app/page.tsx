"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Loading, LoadingImage } from "./page.style";
import Image from "next/image";

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (session) {
      router.replace("/");
    } else {
      router.replace("/login");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <Loading>
        <LoadingImage>
          <Image src="/images/img_loading.png" alt="로딩중..." fill />
        </LoadingImage>
      </Loading>
    );
  }

  // Redirecting
  return null;
}
