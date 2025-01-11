import Card from '@/features/featureB/components/Card';
import CardListWrapper from '@/features/featureB/components/CardListWrapper';
import MockMap from '@/features/featureB/components/MockMap';
import { Footer, Header } from '@/global/layouts';
import { useState } from 'react';
import CardDetail from './CardDetail';
import GuideModal from './GuideModal';
import CardDetailNavigating from './CardDetailNavigating';
import VerificationModal from './VerificationModal';
import CompletedModal from './CompletedModal';

const cardMockData = {
  imageSrc: '/mockmap.png',
  labelMinutes: 10,
  title: 'Sample Title',
  subtitle: 'Sample Subtitle',
  remainingCount: 5,
  remainingMinutes: 30,
};
const detailMockData = {
  labelMinutes: 10,
  title: '마감 전 빵 20퍼센트 세일합니다.',
  subtitle: '장블랑제리',
  address: '서울특별시 강남구 테헤란로 123',
  description:
    '지구 환경 보호를 위한 캠페인에 참여해주세요. 함께 지구를 지키는 작은 실천이 큰 변화를 만듭니다.',
  remainingCount: 5,
  remainingMinutes: 120,
};

export default function GCOOMGO() {
  const [phase, setPhase] = useState<'initial' | 'eventInfo' | 'navigate'>('initial');
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);

  return (
    <>
      <MockMap></MockMap>
      {phase === 'initial' && (
        <CardListWrapper>
          <Card
            onClick={() => {
              console.log('Card Clicked');
              setPhase('eventInfo');
            }}
            {...cardMockData}
          ></Card>
          <Card {...cardMockData}></Card>
          <Card {...cardMockData}></Card>
        </CardListWrapper>
      )}

      {phase === 'eventInfo' && (
        <CardDetail
          onConfirm={() => {
            setIsGuideModalOpen(true);
          }}
          {...detailMockData}
        />
      )}

      {phase === 'navigate' && (
        <CardDetailNavigating
          onConfirm={() => {
            setIsVerificationModalOpen(true);
          }}
          onCancel={() => {
            setPhase('eventInfo');
          }}
          {...detailMockData}
        />
      )}

      <GuideModal
        isOpen={isGuideModalOpen}
        onClose={() => {
          setIsGuideModalOpen(false);
        }}
        onConfirm={() => {
          setIsGuideModalOpen(false);
          setPhase('navigate');
        }}
      ></GuideModal>

      <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => {
          setIsVerificationModalOpen(false);
        }}
        onConfirm={() => {
          setIsVerificationModalOpen(false);
          setIsCompletedModalOpen(true);
        }}
      />

      <CompletedModal
        isOpen={isCompletedModalOpen}
        onClose={() => {
          setIsCompletedModalOpen(false);
          // todo: 홈으로 라우팅
        }}
        onConfirm={() => {
          setIsCompletedModalOpen(false);
        }}
      ></CompletedModal>

      <Footer />
    </>
  );
}
