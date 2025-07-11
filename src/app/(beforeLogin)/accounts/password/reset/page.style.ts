import styled from 'styled-components';
import { FiLock } from 'react-icons/fi';


export const ContainerBox = styled.div`
  height: 82dvh;
`;

export const Container = styled.div`
  width: 400px;
  margin: 40px auto 0 auto;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
`;

export const Inner = styled.div`
  padding: 40px 32px 24px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconArea = styled.div`
  width: 80px;
  height: 80px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const LockIcon = styled(FiLock)`
  font-size: 38px;
  color: #262626;
`;

export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 19px;
  font-weight: 700;
  color: #262626;
  text-align: center;
`;

export const Desc = styled.p`
  color: #737373;
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const Input = styled.input`
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 4px;
  padding: 10px 12px;
  font-size: 16px;
  margin-bottom: 10px;
  background: #fafafa;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  background: #b2dffc;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  padding: 9px 0;
  font-size: 15px;
  margin-bottom: 16px;
  cursor: not-allowed;
`;

export const SmallLink = styled.div`
  color: #00376b;
  font-size: 12px;
  margin-bottom: 18px;
  cursor: pointer;
`;

export const DividerArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 20px 0 12px 0;
`;

export const Divider = styled.div`
  flex: 1;
  height: 1px;
  background: #dbdbdb;
`;

export const Or = styled.div`
  font-size: 13px;
  color: #8e8e8e;
  margin: 0 16px;
`;

export const CreateAccount = styled.div`
  color: #262626;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const BackToLogin = styled.div`
  width: 100%;
  padding: 16px 0;
  border-top: 1px solid #dbdbdb;
  color: #262626;
  background: #fafafa;
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 0 0 8px 8px;
`;
