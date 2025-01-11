import type { Coordinates } from '@/features/map/types';

export type MeetItemDto = {
  id: number;
  created_at: string;
  title: string;
  destination: string;
  expiry: string;
  num_participants: number;
  coordinates: Coordinates;
  image_url: string;
};
