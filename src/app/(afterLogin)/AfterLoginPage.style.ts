import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
`;

export const LeftArea = styled.div`
  width: 220px;
  border-right: 1px solid #dbdbdb;
  height: 100vh;
  position: sticky;
  top: 0;
`;

export const ContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;
