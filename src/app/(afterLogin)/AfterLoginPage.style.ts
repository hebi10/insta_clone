import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding-left: 220px;
  box-sizing: border-box;
`;

export const LeftArea = styled.div`
  width: 220px;
  border-right: 1px solid #dbdbdb;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const ContentArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  width: 100%;
`;

export const LeftList = styled.div`
  flex: 1;
  padding: 20px 0;
  box-sizing: border-box;
  height: 100vh;
  max-width: 500px;
`;

export const RightArea = styled.div`
  width: 300px;
  margin-left: 20px;
  overflow-y: auto;
`;