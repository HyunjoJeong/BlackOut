import { useEffect, useState } from 'react';
import type { EventDetailDto, EventDto, Phase } from '../types';
import { CardListWrapper, Card, CardDetail, CardDetailNavigating } from './card';
import { GuideModal, VerificationModal, CompletedModal } from './modal';
import { fetchEventDetails } from '../apis';

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

type GcoomGoBottomProps = {
  phase: Phase;
  setPhase: (phase: Phase) => void;
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  eventList?: EventDto[];
  eventDetails?: EventDetailDto;
};

export default function GcoomGoBottom({
  phase,
  setPhase,
  selectedId,
  setSelectedId,
  eventList,
}: GcoomGoBottomProps) {
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [isCompletedModalOpen, setIsCompletedModalOpen] = useState(false);
  const [eventDetails, setEventDetails] = useState<EventDetailDto | null>(null);

  const transformEventDetailsToCardProps = (
    details: EventDetailDto | null
  ): {
    labelMinutes: number;
    title: string;
    subtitle: string;
    address: string;
    description: string;
    remainingCount: number;
    remainingMinutes: number;
  } | null => {
    if (!details) return null;

    const currentTime = new Date();
    const expiryTime = new Date(details.expiry);
    const remainingMinutes = Math.max(
      Math.floor((expiryTime.getTime() - currentTime.getTime()) / (1000 * 60)),
      0
    ); // 음수 방지

    return {
      labelMinutes: remainingMinutes,
      title: details.title,
      subtitle: details.host_name, // 호스트 이름을 subtitle로 매핑
      address: details.destination,
      description: details.description,
      remainingCount: details.remaining_num,
      remainingMinutes,
    };
  };

  const detailData = transformEventDetailsToCardProps(eventDetails);

  useEffect(() => {
    if (selectedId !== null) {
      fetchEventDetails(selectedId)
        .then((details) => {
          setEventDetails(details);
        })
        .catch((error) => {
          console.error('Error fetching event details:', error);
        });
    }
  }, [selectedId]);
  return (
    <>
      {phase === 'initial' && (
        <CardListWrapper>
          {eventList?.map((event_) => {
            const currentTime = new Date();
            const expiryTime = new Date(event_.expiry);
            const remainingMinutes = Math.floor(
              (expiryTime.getTime() - currentTime.getTime()) / (1000 * 60)
            ); // 남은 시간(분 단위)

            // 변환된 데이터 구조
            const transformedEvent = {
              imageSrc: event_.image_url, // 이미지 URL
              title: event_.title, // 이벤트 제목
              hostname: event_.host_name, // 호스트 이름
              remainingCount: event_.remaining_num, // 남은 인원 수
              remainingMinutes: Math.max(remainingMinutes, 0), // 남은 시간(분), 음수가 되지 않도록 처리
            };

            return (
              <Card
                onClick={() => {
                  setPhase('eventInfo');
                  setSelectedId(Number(event_.id));
                }}
                key={event_.id}
                {...transformedEvent}
              ></Card>
            );
          })}
        </CardListWrapper>
      )}

      {phase === 'eventInfo' && (
        <CardDetail
          onConfirm={() => {
            setIsGuideModalOpen(true);
          }}
          {...(detailData ?? detailMockData)}
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
          {...(detailData ?? detailMockData)}
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
    </>
  );
}
