import type { Coordinate } from '.';

// TODO: 실제 api dto 연동해야함. 파일 위치도 변경? 예정? 몰루
export type MapItemDto = {
  title: string;
  destination: string;
  coordinate: Coordinate;
};
