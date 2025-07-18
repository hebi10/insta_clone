import styled from 'styled-components';

export const SignupContainer = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  
  @media ${props => props.theme.media.mobile} {
    background-color: #fff;
    padding: 0;
  }
`;

export const SignupBox = styled.div`
  width: 350px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  padding: 40px 40px 20px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.media.mobile} {
    width: 100%;
    border: none;
    padding: 20px;
    margin-bottom: 0;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  
  img {
    height: 51px;
    width: auto;
  }
`;

export const Title = styled.h2`
  font-size: 17px;
  font-weight: 600;
  color: #8e8e8e;
  text-align: center;
  margin: 0 0 20px 0;
  line-height: 20px;
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: #8e8e8e;
  text-align: center;
  margin: 16px 0;
  line-height: 16px;
  
  a {
    color: #00376b;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const FacebookLogin = styled.button`
  width: 100%;
  background-color: #1877f2;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
  
  &:hover {
    background-color: #166fe5;
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

export const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #dbdbdb;
  }
`;

export const OrText = styled.span`
  color: #8e8e8e;
  font-size: 13px;
  font-weight: 600;
  margin: 0 18px;
  text-transform: uppercase;
`;

export const SignupForm = styled.form`
  width: 100%;
`;

export const InputGroup = styled.div`
  margin-bottom: 6px;
`;

export const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError?: boolean }>`
  width: 100%;
  padding: 9px 0 7px 8px;
  border: 1px solid ${props => props.hasError ? '#ed4956' : '#dbdbdb'};
  border-radius: 3px;
  background-color: #fafafa;
  font-size: 12px;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#ed4956' : '#a8a8a8'};
    background-color: #fff;
  }
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const ErrorMessage = styled.div`
  color: #ed4956;
  font-size: 12px;
  margin-top: 6px;
  text-align: left;
`;

export const SuccessMessage = styled.div`
  color: #00a400;
  font-size: 12px;
  margin: 12px 0;
  text-align: center;
`;

export const SignupButton = styled.button<{ disabled?: boolean }>`
  width: 100%;
  background-color: ${props => props.disabled ? '#cce5ff' : '#0095f6'};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-top: 8px;
  
  &:hover:not(:disabled) {
    background-color: #1877f2;
  }
`;

export const LoginLink = styled.div`
  width: 350px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 1px;
  padding: 20px;
  text-align: center;
  font-size: 14px;
  color: #262626;
  margin-bottom: 20px;
  
  a {
    color: #0095f6;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  @media ${props => props.theme.media.mobile} {
    width: 100%;
    border: none;
    border-top: 1px solid #dbdbdb;
    border-radius: 0;
    margin-bottom: 0;
  }
`;

export const AppDownload = styled.div`
  text-align: center;
  margin-bottom: 40px;
  
  p {
    font-size: 14px;
    color: #262626;
    margin-bottom: 20px;
  }
  
  @media ${props => props.theme.media.mobile} {
    padding: 20px;
  }
`;

export const AppButtons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  
  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
    align-items: center;
  }
`;

export const AppButton = styled.a`
  display: inline-block;
  
  img {
    height: 40px;
    width: auto;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  max-width: 935px;
  margin-top: 40px;
  
  @media ${props => props.theme.media.mobile} {
    padding: 0 20px;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 12px;
  
  @media ${props => props.theme.media.mobile} {
    gap: 8px;
  }
`;

export const FooterLink = styled.a`
  color: #8e8e8e;
  font-size: 12px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #8e8e8e;
  font-size: 12px;
  
  select {
    background: none;
    border: none;
    color: #8e8e8e;
    font-size: 12px;
    cursor: pointer;
    
    &:focus {
      outline: none;
    }
  }
  
  @media ${props => props.theme.media.mobile} {
    flex-direction: column;
    gap: 8px;
  }
`;
