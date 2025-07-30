import { redirect } from 'next/navigation';

export default function SearchPage() {
  // 모달 검색 페이지에 직접 접근하면 홈으로 리다이렉트
  redirect('/');
}
