import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

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
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

export const LeftList = styled.div`
  flex: 1;
  padding: 20px 0;
  box-sizing: border-box;
`;

export const RightArea = styled.div`
  width: 300px;
  margin-left: 20px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
`;