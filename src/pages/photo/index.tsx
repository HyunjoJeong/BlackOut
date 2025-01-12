import { APIServer } from '@/config/axios';
import { Button } from '@/core';
import { Header } from '@/global/layouts';
import BackButton from '@/global/layouts/header/BackButton';
import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';

export default function PhotoUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploadedImage, setUploadedImage] = useState('');

  const partyId = 4;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedImage) return;

    try {
      const formData = new FormData();
      formData.append('image', selectedImage);

      const { data } = await APIServer.post(`/parties/${partyId}/end/`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (data?.url) {
        setUploadedImage(data.url);
      }
    } catch (error) {
      console.error('사진 업로드 실패:', error);
      alert('사진 업로드에 실패했습니다.');
    }
  };

  return (
    <>
      <Header left={<BackButton />} />
      <StyledMain>
        <h2>인증샷을 자랑해 보세요</h2>
        <p>카카오톡과 인스타그램 스토리로 공유할 수 있어요</p>
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
          <Button
            variant="filledPrimary"
            type="submit"
            disabled={!selectedImage}
            css={{ padding: '6px 8px' }}
          >
            업로드
          </Button>
        </form>
        {uploadedImage && (
          <StyledImageWrapper>
            <Image src={uploadedImage} alt="업로드 이미지" fill />
          </StyledImageWrapper>
        )}
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  padding: 20px 20px 60px;

  h2 {
    margin-bottom: 8px;
    ${({ theme }) => theme.typography.title3}
    color: ${({ theme }) => theme.colors.gray['800']};
  }

  p {
    ${({ theme }) => theme.typography.body1}
    color: ${({ theme }) => theme.colors.gray['600']};
  }
`;

const StyledImageWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  min-height: 500px;

  position: relative;

  image {
    width: 100% !important;
    height: auto !important;
    position: static !important;
  }
`;
