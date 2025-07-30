'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  CreateModalOverlay,
  CreateContainer,
  CreateHeader,
  CreateTitle,
  CloseButton,
  CreateContent,
  CreateSteps,
  Step,
  UploadArea,
  UploadIcon,
  UploadText,
  UploadSubtext,
  UploadButton,
  HiddenInput,
  PreviewArea,
  ImagePreview,
  PreviewImage,
  PostForm,
  FormGroup,
  Label,
  TextArea,
  CharacterCount,
  TagInput,
  TagsList,
  Tag,
  FormActions,
  Button,
  LoadingOverlay,
  LoadingContent,
} from './page.style';
import { FiImage, FiX } from 'react-icons/fi';

interface CreateModalProps {
  params?: Promise<{ [key: string]: string | string[] }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default function CreateModal({ params, searchParams }: CreateModalProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    router.back();
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setCurrentStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelectedImage(e.target?.result as string);
          setCurrentStep(2);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      const newTag = tagInput.trim();
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleShare = async () => {
    setIsUploading(true);
    
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          caption,
          tags,
          imageUrl: selectedImage,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const data = await response.json();
      
      // 업로드 완료 후 홈으로 이동
      alert('게시물이 성공적으로 업로드되었습니다!');
      router.push('/');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('게시물 업로드에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
      setSelectedImage(null);
      setCaption('');
      setTags([]);
      setTagInput('');
    } else {
      handleClose();
    }
  };

  useEffect(() => {
    console.log("실행되는지 테스트, 만들기 모달 x");
  }, []);

  return (
    <>
      <CreateModalOverlay onClick={handleOverlayClick}>
        <CreateContainer onClick={(e) => e.stopPropagation()}>
          <CreateHeader>
            <CloseButton onClick={handleClose}>
              <FiX />
            </CloseButton>
            <CreateTitle>새 게시물 만들기</CreateTitle>
            <div style={{ width: '40px' }} />
          </CreateHeader>

          {currentStep === 2 && (
            <CreateSteps>
              <Step active={currentStep >= 1}>
                <div className="step-number">1</div>
                <span>사진 선택</span>
              </Step>
              <Step active={currentStep >= 2}>
                <div className="step-number">2</div>
                <span>편집 및 공유</span>
              </Step>
            </CreateSteps>
          )}

          <CreateContent>
            {currentStep === 1 && (
              <UploadArea
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
              >
                <UploadIcon>
                  <FiImage />
                </UploadIcon>
                <UploadText>사진과 동영상을 여기에 끌어다 놓으세요</UploadText>
                <UploadSubtext>또는 컴퓨터에서 선택하세요</UploadSubtext>
                <UploadButton>컴퓨터에서 선택</UploadButton>
                <HiddenInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                />
              </UploadArea>
            )}

            {currentStep === 2 && selectedImage && (
              <PreviewArea>
                <ImagePreview>
                  <PreviewImage src={selectedImage} alt="선택된 이미지" />
                </ImagePreview>

                <PostForm>
                  <FormGroup>
                    <Label>문구</Label>
                    <TextArea
                      value={caption}
                      onChange={(e) => setCaption(e.target.value)}
                      placeholder="문구를 입력하세요..."
                      maxLength={2200}
                    />
                    <CharacterCount>{caption.length}/2,200</CharacterCount>
                  </FormGroup>

                  <FormGroup>
                    <Label>태그 추가</Label>
                    <TagInput
                      value={tagInput}
                      onChange={(e) => setTagInput(e.target.value)}
                      onKeyDown={handleAddTag}
                      placeholder="#태그를 입력하고 Enter를 누르세요"
                    />
                    {tags.length > 0 && (
                      <TagsList>
                        {tags.map((tag) => (
                          <Tag key={tag}>
                            #{tag}
                            <span className="remove" onClick={() => handleRemoveTag(tag)}>
                              <FiX />
                            </span>
                          </Tag>
                        ))}
                      </TagsList>
                    )}
                  </FormGroup>
                </PostForm>
              </PreviewArea>
            )}
          </CreateContent>

          {currentStep === 2 && (
            <FormActions>
              <Button variant="secondary" onClick={handleBack}>
                뒤로
              </Button>
              <Button 
                variant="primary" 
                onClick={handleShare}
                disabled={!selectedImage}
              >
                공유하기
              </Button>
            </FormActions>
          )}
        </CreateContainer>
      </CreateModalOverlay>

      {isUploading && (
        <LoadingOverlay>
          <LoadingContent>
            <div className="spinner" />
            <div>게시물을 업로드하는 중...</div>
          </LoadingContent>
        </LoadingOverlay>
      )}
    </>
  );
}
