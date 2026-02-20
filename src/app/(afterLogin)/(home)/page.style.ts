import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  width: 100%;
  min-height: 100dvh;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  width: 100%;
  padding: 0 20px;

  @media ${props => props.theme.media.tablet} {
    gap: 24px;
    padding: 0 16px;
  }

  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
    gap: 0;
    padding: 0;
    padding-bottom: 55px;
  }
`;

export const LeftList = styled.div`
  flex: 1;
  padding: 20px 0;
  box-sizing: border-box;
  min-height: 100dvh;
  max-width: ${props => props.theme.instagram.postWidth};

  @media ${props => props.theme.media.mobile} {
    max-width: 100%;
    padding: 0;
    min-height: auto;
  }

  @media ${props => props.theme.media.tablet} {
    padding: 14px 0;
  }
`;

export const RightArea = styled.div`
  width: 320px;
  flex-shrink: 0;
  padding: 18px 0;

  @media ${props => props.theme.media.tablet} {
    display: none;
  }

  @media ${props => props.theme.media.mobile} {
    display: none;
  }
`;