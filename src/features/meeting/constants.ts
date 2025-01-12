import type { PartyDetailDto } from './types/dto';

export const MEET_LIST_MOCKUP: Array<PartyDetailDto> = [
  {
    id: 1,
    created_at: '2025-01-11T08:49:56.688506+00:00',
    title: '서울 랜드마크 투어',
    destination: '서울 타워',
    expiry: '2025-01-12T12:11:02',
    num_participants: 10,
    coordinates: [50, 120],
    image_url: 'https://example.com/image1.jpg',
  },
  {
    id: 2,
    created_at: '2025-01-10T15:34:20.123456+00:00',
    title: '부산 맛집 탐방',
    destination: '광안리 해변',
    expiry: '2025-01-13T18:00:00',
    num_participants: 8,
    coordinates: [250, 320],
    image_url: 'https://example.com/image2.jpg',
  },
  {
    id: 3,
    created_at: '2025-01-09T09:20:10.543210+00:00',
    title: '제주도 올레길 산책',
    destination: '제주 올레길 7코스',
    expiry: '2025-01-14T09:00:00',
    num_participants: 5,
    coordinates: [230, 60],
    image_url: 'https://example.com/image3.jpg',
  },
  {
    id: 4,
    created_at: '2025-01-08T13:12:45.987654+00:00',
    title: '강릉 커피 거리 체험',
    destination: '안목 커피 거리',
    expiry: '2025-01-15T14:30:00',
    num_participants: 12,
    coordinates: [120, 200],
    image_url: 'https://example.com/image4.jpg',
  },
  {
    id: 5,
    created_at: '2025-01-07T22:50:30.112233+00:00',
    title: '한강 라이딩',
    destination: '뚝섬 유원지',
    expiry: '2025-01-16T17:00:00',
    num_participants: 15,
    coordinates: [60, 170],
    image_url: 'https://example.com/image5.jpg',
  },
];
