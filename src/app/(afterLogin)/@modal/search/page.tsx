import SearchModal from './SearchModal';

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const isOpen = params?.modal === 'true';

  return (
    <SearchModal
      isOpen={isOpen}
      onClose={() => {
        // 모달 닫기 로직
        window.history.back();
      }}
    />
  );
}
