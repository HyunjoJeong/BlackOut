import type { Coordinates } from '@/features/map/types';

export type PartyState = 'RECRUITING' | 'COMPLETED';

export type PartyListItemDto = {
  id: number;
  created_at: string;
  title: string;
  destination: string;
  meet_at: string;
  num_participants: number;
  remaining_num: number;
  coordinates: Coordinates;
  parking_spot: Coordinates;
  state: PartyState;
};

export type ParticipantDto = {
  nickname: string;
  status: boolean;
};

export type PartyDetailDto = {
  id: number;
  created_at: string;
  title: string;
  organizer_name: string;
  is_organizer: boolean;
  description: string;
  destination: string;
  meet_at: string;
  participants_status: Array<ParticipantDto>;
  available_action: 'FINISHED' | 'JOIN' | 'START_RIDE' | 'END_RIDE' | 'PHOTO';
  image_url: string;
  num_participants: number;
  remaining_num: number;
  coordinates: Coordinates;
  parking_spot: Coordinates;
  state: PartyState;
};
