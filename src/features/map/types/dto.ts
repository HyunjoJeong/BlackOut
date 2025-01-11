import type { Coordinates } from '.';

// TODO: 실제 api dto 연동해야함. 파일 위치도 변경? 예정? 몰루
export type MapItemDto = {
  id: number;
  title: string;
  destination: string;
  coordinates: Coordinates;
};
