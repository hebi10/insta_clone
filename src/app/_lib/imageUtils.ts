/**
 * 안정적인 이미지 URL 생성 유틸리티
 * 여러 이미지 서비스를 fallback으로 제공
 */

// 여러 이미지 서비스의 fallback URL들
const IMAGE_SERVICES = {
  // Picsum Photos (가장 안정적)
  picsum: (seed: string, width: number, height: number) => 
    `https://picsum.photos/seed/${seed}/${width}/${height}`,
  
  // Lorem Picsum (백업용)
  lorem: (seed: string, width: number, height: number) => 
    `https://loremflickr.com/${width}/${height}/nature?random=${seed}`,
  
  // Placeholder.com (최후 수단)
  placeholder: (seed: string, width: number, height: number) => 
    `https://via.placeholder.com/${width}x${height}/4A90E2/FFFFFF?text=${seed.slice(0, 2)}`,
};

/**
 * 안정적인 게시물 이미지 URL 생성
 */
export function generatePostImageUrl(seed?: string): string {
  const imageSeed = seed || Math.random().toString(36).substring(7);
  return IMAGE_SERVICES.picsum(`post-${imageSeed}`, 600, 400);
}

/**
 * 안정적인 아바타 이미지 URL 생성
 */
export function generateAvatarImageUrl(seed?: string): string {
  const imageSeed = seed || Math.random().toString(36).substring(7);
  return IMAGE_SERVICES.picsum(`avatar-${imageSeed}`, 150, 150);
}

/**
 * 안정적인 프로필 이미지 URL 생성
 */
export function generateProfileImageUrl(seed?: string, size: number = 400): string {
  const imageSeed = seed || Math.random().toString(36).substring(7);
  return IMAGE_SERVICES.picsum(`profile-${imageSeed}`, size, size);
}

/**
 * 안정적인 탐색 페이지 이미지 URL 생성
 */
export function generateExploreImageUrl(seed?: string): string {
  const imageSeed = seed || Math.random().toString(36).substring(7);
  return IMAGE_SERVICES.picsum(`explore-${imageSeed}`, 400, 400);
}

/**
 * fallback 이미지 URL들 생성
 */
export function generateFallbackUrls(seed: string, width: number, height: number): string[] {
  return [
    IMAGE_SERVICES.picsum(seed, width, height),
    IMAGE_SERVICES.lorem(seed, width, height),
    IMAGE_SERVICES.placeholder(seed, width, height),
  ];
}

/**
 * 커스텀 크기 이미지 URL 생성
 */
export function generateCustomImageUrl(
  type: string, 
  seed: string, 
  width: number, 
  height: number
): string {
  return IMAGE_SERVICES.picsum(`${type}-${seed}`, width, height);
}
