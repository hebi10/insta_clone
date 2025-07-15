import SearchModal from './SearchModal';

interface SearchPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const isOpen = searchParams?.modal === 'true';
  
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
