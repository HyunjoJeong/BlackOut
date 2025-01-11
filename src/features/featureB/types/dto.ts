import type { Coordinates } from '@/features/map/types';

export type EventDto = {
  id: number;
  created_at: string;
  title: string;
  host_name: string;
  destination: string;
  expiry: string;
  num_started: number;
  num_completed: number;
  remaining_num: number;
  coordinates: Coordinates;
  image_url: string;
};

export type EventDetailDto = {
  id: number;
  host_name: string;
  destination: string;
  title: string;
  description: string;
  image_url: string;
  expiry: string;
  num_started: number;
  num_completed: number;
  remaining_num: number;
  coordinates: Coordinates;
  status: 'started' | 'completed' | 'not_started';
};
