'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  SignupContainer,
  SignupBox,
  LogoContainer,
  SignupForm,
  Title,
  Subtitle,
  InputGroup,
  Input,
  SignupButton,
  OrDivider,
  OrText,
  FacebookLogin,
  LoginLink,
  AppDownload,
  AppButtons,
  AppButton,
  Footer,
  FooterLinks,
  FooterLink,
  Copyright,
  ErrorMessage,
  SuccessMessage,
} from './page.style';
import { FiFacebook } from 'react-icons/fi';

export default function EmailSignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // 입력 시 해당 필드의 에러 제거
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.email) {
      newErrors.email = '이메일을 입력해주세요.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
    }

    if (!formData.fullName) {
      newErrors.fullName = '성명을 입력해주세요.';
    }

    if (!formData.username) {
      newErrors.username = '사용자 이름을 입력해주세요.';
    } else if (formData.username.length < 3) {
      newErrors.username = '사용자 이름은 최소 3자 이상이어야 합니다.';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // 실제 회원가입 API 호출
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess('계정이 성공적으로 생성되었습니다! 로그인 페이지로 이동합니다.');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        const data = await response.json();
        setErrors({ submit: data.message || '회원가입 중 오류가 발생했습니다.' });
      }
    } catch (error) {
      setErrors({ submit: '네트워크 오류가 발생했습니다.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SignupContainer>
      <SignupBox>
        <LogoContainer>
          <Image 
            src="/images/img_logo.svg" 
            alt="Instagram" 
            width={175} 
            height={51}
          />
        </LogoContainer>

        <Title>친구들의 사진과 동영상을 보려면 가입하세요.</Title>

        <FacebookLogin>
          <FiFacebook />
          Facebook으로 로그인
        </FacebookLogin>

        <OrDivider>
          <OrText>또는</OrText>
        </OrDivider>

        <SignupForm onSubmit={handleSubmit}>
          <InputGroup>
            <Input
              type="email"
              name="email"
              placeholder="휴대폰 번호 또는 이메일 주소"
              value={formData.email}
              onChange={handleInputChange}
              hasError={!!errors.email}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Input
              type="text"
              name="fullName"
              placeholder="성명"
              value={formData.fullName}
              onChange={handleInputChange}
              hasError={!!errors.fullName}
            />
            {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Input
              type="text"
              name="username"
              placeholder="사용자 이름"
              value={formData.username}
              onChange={handleInputChange}
              hasError={!!errors.username}
            />
            {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <Input
              type="password"
              name="password"
              placeholder="비밀번호"
              value={formData.password}
              onChange={handleInputChange}
              hasError={!!errors.password}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </InputGroup>

          {errors.submit && <ErrorMessage>{errors.submit}</ErrorMessage>}
          {success && <SuccessMessage>{success}</SuccessMessage>}

          <Subtitle>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도 있습니다. <Link href="/privacy">더 알아보기</Link>
          </Subtitle>

          <SignupButton type="submit" disabled={isLoading}>
            {isLoading ? '가입 중...' : '가입'}
          </SignupButton>
        </SignupForm>
      </SignupBox>

      <LoginLink>
        계정이 있으신가요? <Link href="/">로그인</Link>
      </LoginLink>

      <AppDownload>
        <p>앱을 다운로드하세요.</p>
        <AppButtons>
          <AppButton>
            <div style={{
              width: '136px',
              height: '40px',
              backgroundColor: '#000',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              App Store
            </div>
          </AppButton>
          <AppButton>
            <div style={{
              width: '136px',
              height: '40px',
              backgroundColor: '#01875f',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              Google Play
            </div>
          </AppButton>
        </AppButtons>
      </AppDownload>

      <Footer>
        <FooterLinks>
          <FooterLink href="/about">Meta</FooterLink>
          <FooterLink href="/about">소개</FooterLink>
          <FooterLink href="/blog">블로그</FooterLink>
          <FooterLink href="/jobs">채용 정보</FooterLink>
          <FooterLink href="/help">도움말</FooterLink>
          <FooterLink href="/api">API</FooterLink>
          <FooterLink href="/privacy">개인정보처리방침</FooterLink>
          <FooterLink href="/terms">약관</FooterLink>
          <FooterLink href="/directory">인기 계정</FooterLink>
          <FooterLink href="/hashtag">해시태그</FooterLink>
          <FooterLink href="/locations">위치</FooterLink>
          <FooterLink href="/lite">Instagram Lite</FooterLink>
          <FooterLink href="/contact">연락처 업로드 & 비사용자</FooterLink>
          <FooterLink href="/meta-verified">Meta Verified</FooterLink>
        </FooterLinks>
        <Copyright>
          <select>
            <option>한국어</option>
            <option>English</option>
          </select>
          <span>© 2024 Instagram from Meta</span>
        </Copyright>
      </Footer>
    </SignupContainer>
  );
}
