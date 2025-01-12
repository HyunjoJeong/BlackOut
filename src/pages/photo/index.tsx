import { useState } from 'react';
import { APIServer } from '@/config/axios';
import { useRouter } from 'next/router';

export default function PhotoUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const router = useRouter();
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
      
      // 이미지 URL을 새 창에서 열기
      if (data?.url) {
        window.open(data.url, '_blank');
      }
      
      // 성공 후 리다이렉트 (예: 메인 페이지로)
      router.push('/');
    } catch (error) {
      console.error('사진 업로드 실패:', error);
      alert('사진 업로드에 실패했습니다.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">파티 기념사진 업로드</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        <button
          type="submit"
          disabled={!selectedImage}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          업로드
        </button>
      </form>
    </div>
  );
}
