import styled from 'styled-components';

export const CreateModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
`;

export const CreateContainer = styled.div`
  max-width: 850px;
  width: 100%;
  max-height: 90vh;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

export const CreateHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fff;
`;

export const CreateTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #262626;
  margin: 0;
  flex: 1;
  text-align: center;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  color: #262626;
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  &:hover {
    opacity: 0.7;
  }
`;

export const CreateContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0;
`;

export const CreateSteps = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  gap: 20px;
  border-bottom: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

export const Step = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${props => props.active ? '#0095f6' : '#8e8e8e'};
  font-size: 14px;
  font-weight: ${props => props.active ? '600' : '400'};
  
  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.active ? '#0095f6' : '#dbdbdb'};
    color: #fff;
    font-size: 12px;
    font-weight: 600;
  }
`;

export const UploadArea = styled.div`
  border: 2px dashed #dbdbdb;
  border-radius: 12px;
  padding: 60px 20px;
  margin: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #0095f6;
    background-color: #fafafa;
  }
  
  &.dragover {
    border-color: #0095f6;
    background-color: #f0f8ff;
  }
`;

export const UploadIcon = styled.div`
  font-size: 48px;
  color: #8e8e8e;
  margin-bottom: 16px;
`;

export const UploadText = styled.div`
  font-size: 20px;
  color: #262626;
  margin-bottom: 8px;
  font-weight: 300;
`;

export const UploadSubtext = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  margin-bottom: 20px;
`;

export const UploadButton = styled.button`
  background-color: #0095f6;
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background-color: #1877f2;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const PreviewArea = styled.div`
  display: flex;
  gap: 0;
  height: 500px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

export const ImagePreview = styled.div`
  flex: 1;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const PostForm = styled.div`
  flex: 1;
  min-width: 340px;
  padding: 20px;
  border-left: 1px solid #dbdbdb;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    border-left: none;
    border-top: 1px solid #dbdbdb;
    min-width: auto;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: #262626;
  margin-bottom: 8px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 14px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #0095f6;
  }
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const CharacterCount = styled.div`
  text-align: right;
  font-size: 12px;
  color: #8e8e8e;
  margin-top: 4px;
`;

export const TagInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #0095f6;
  }
  
  &::placeholder {
    color: #8e8e8e;
  }
`;

export const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

export const Tag = styled.span`
  background-color: #e3f2fd;
  color: #0095f6;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
  
  .remove {
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
      color: #1877f2;
    }
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  padding: 16px 20px;
  border-top: 1px solid #dbdbdb;
  background-color: #fafafa;
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'variant',
})<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid;
  transition: all 0.2s ease;
  
  ${props => props.variant === 'primary' ? `
    background-color: #0095f6;
    color: #fff;
    border-color: #0095f6;
    
    &:hover {
      background-color: #1877f2;
      border-color: #1877f2;
    }
    
    &:disabled {
      background-color: #b3d9ff;
      border-color: #b3d9ff;
      cursor: not-allowed;
    }
  ` : `
    background-color: #fff;
    color: #262626;
    border-color: #dbdbdb;
    
    &:hover {
      background-color: #fafafa;
    }
  `}
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
`;

export const LoadingContent = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 12px;
  text-align: center;
  
  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #dbdbdb;
    border-top: 4px solid #0095f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 16px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
