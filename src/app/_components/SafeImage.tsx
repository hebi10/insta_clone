"use client";
import { useState } from 'react';
import styled from 'styled-components';

interface SafeImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackSrc?: string;
  style?: React.CSSProperties;
}

const ImageContainer = styled.div<{ width?: number; height?: number }>`
  width: ${props => props.width ? `${props.width}px` : '100%'};
  height: ${props => props.height ? `${props.height}px` : 'auto'};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
  border-radius: 8px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FallbackContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

export default function SafeImage({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc,
  style
}: SafeImageProps) {
  const [imageError, setImageError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleFallbackError = () => {
    setFallbackError(true);
  };

  return (
    <ImageContainer 
      width={width} 
      height={height} 
      className={className}
      style={style}
    >
      {!imageError ? (
        <Image
          src={src}
          alt={alt}
          onError={handleImageError}
        />
      ) : !fallbackError && fallbackSrc ? (
        <Image
          src={fallbackSrc}
          alt={alt}
          onError={handleFallbackError}
        />
      ) : (
        <FallbackContainer>
          {alt || '이미지'}
        </FallbackContainer>
      )}
    </ImageContainer>
  );
}
