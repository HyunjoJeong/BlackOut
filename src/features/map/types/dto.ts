import type { Coordinates } from '.';

export type MapItemDto = {
  id: number;
  title: string;
  destination: string;
  coordinates: Coordinates;
};
