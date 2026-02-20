'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = styled.div`
  width: 100%;
  max-width: ${props => props.theme.instagram.maxWidth};
  margin: 0 auto;
  padding: 0 20px;
  
  @media ${props => props.theme.media.tablet} {
    padding: 0 16px;
  }
  
  @media ${props => props.theme.media.mobile} {
    padding: 0 8px;
  }
`;

export default function ResponsiveContainer({ children, className }: ResponsiveContainerProps) {
  return (
    <Container className={className}>
      {children}
    </Container>
  );
}

// 반응형 그리드 컴포넌트
export const ResponsiveGrid = styled.div<{
  desktop?: number;
  tablet?: number;
  mobile?: number;
  gap?: string;
}>`
  display: grid;
  gap: ${props => props.gap || '16px'};
  
  /* 데스크톱 */
  grid-template-columns: repeat(${props => props.desktop || 3}, 1fr);
  
  /* 태블릿 */
  @media ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(${props => props.tablet || 2}, 1fr);
  }
  
  /* 모바일 */
  @media ${props => props.theme.media.mobile} {
    grid-template-columns: repeat(${props => props.mobile || 1}, 1fr);
    gap: ${props => props.gap ? '8px' : '8px'};
  }
`;

// 반응형 Flexbox 컴포넌트
export const ResponsiveFlex = styled.div<{
  direction?: 'row' | 'column';
  mobileDirection?: 'row' | 'column';
  justify?: string;
  align?: string;
  gap?: string;
  wrap?: boolean;
}>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  gap: ${props => props.gap || '16px'};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  
  @media ${props => props.theme.media.mobile} {
    flex-direction: ${props => props.mobileDirection || props.direction || 'column'};
    gap: ${props => props.gap ? '8px' : '8px'};
  }
`;

// 반응형 텍스트 컴포넌트
export const ResponsiveText = styled.p<{
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 300 | 400 | 500 | 600 | 700;
  color?: string;
}>`
  font-size: ${props => props.theme.fontSize[props.size || 'base']};
  font-weight: ${props => props.weight || 400};
  color: ${props => props.color || `rgb(${props.theme.colors.igBlack})`};
  margin: 0;
  
  @media ${props => props.theme.media.mobile} {
    font-size: ${props => {
      const sizeMap: Record<string, string> = {
        'xs': props.theme.fontSize.xs,
        'sm': '12px',
        'base': '13px',
        'lg': props.theme.fontSize.base,
        'xl': props.theme.fontSize.lg
      };
      return sizeMap[props.size || 'base'];
    }};
  }
`;

// 모바일에서만 보이는 컴포넌트
export const MobileOnly = styled.div`
  display: none;
  
  @media ${props => props.theme.media.mobile} {
    display: block;
  }
`;

// 데스크톱에서만 보이는 컴포넌트
export const DesktopOnly = styled.div`
  display: block;
  
  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`;

// 태블릿 이상에서만 보이는 컴포넌트
export const TabletUp = styled.div`
  display: block;
  
  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`;
