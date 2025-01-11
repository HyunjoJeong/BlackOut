import { API_BASE_URL } from '@/global/constants';

export type EventListResponse = Array<{
  id: number;
  host_name: string;
  created_at: Date
  title: string;
  destination: string;
  image_url: string;
  expiry: Date;
  num_started: number;
  num_completed: number;
  remaining_num: number;
  coordinates: [number, number];
}>;

const useEventQueries = {
  get: async (id: number): Promise<{
    id: number;
    host_name: string;
    created_at: Date
    title: string;
    destination: string;
    description: string;
    image_url: string;
    expiry: Date;
    num_started: number;
    num_completed: number;
    coordinates: [number, number];
    "status": "started" | "completed" | "not_started";
  }> => {
    const response = await fetch(`${API_BASE_URL}/events/${id}`);
    return response.json();
  },
  list: async (): Promise<EventListResponse> => {
    const response = await fetch(`${API_BASE_URL}/events`);
    return response.json();
  },

  join: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}/join`, {
      method: 'POST',
    });
    return response.json();
  },

  complete: async ({id, answer_key}:{
    id: number;
    answer_key: string;
  }) => {
    const response = await fetch(`${API_BASE_URL}/events/${id}/complete`, {
      method: 'POST',
      body: JSON.stringify({answer_key}),
    });
    return response.json();
  },

  my: async (): Promise<EventListResponse> => {
    const response = await fetch(`${API_BASE_URL}/events/my`);
    return response.json();
  }
}