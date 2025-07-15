export default function SearchPage() {
  return (
    <div style={{ 
      padding: '20px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '50vh',
      color: '#8e8e8e',
      fontSize: '16px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#262626', marginBottom: '8px' }}>검색하기</h2>
        <p>좌측 메뉴에서 검색 버튼을 클릭하여 사용자나 콘텐츠를 검색해보세요.</p>
      </div>
    </div>
  );
}
