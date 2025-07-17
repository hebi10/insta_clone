export default function CreatePage() {
  // 이 페이지는 직접 접근할 때만 사용됩니다 (새로고침 등)
  // 실제 모달은 @modal/(.)create/page.tsx에서 처리됩니다
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100dvh',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h2>새 게시물 만들기</h2>
      <p>직접 URL로 접근하셨습니다. 홈에서 만들기 버튼을 클릭해보세요.</p>
      <a href="/" style={{ 
        color: '#0095f6', 
        textDecoration: 'none',
        padding: '10px 20px',
        border: '1px solid #0095f6',
        borderRadius: '8px'
      }}>
        홈으로 이동
      </a>
    </div>
  );
}
