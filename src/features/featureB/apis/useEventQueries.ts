import { APIServer } from '@/config/axios';
import type { EventDetailDto, EventsDto } from '../types/dto';

export const useEventQueries = {
  get: async (id: number) => {
    const { data } = await APIServer.get<EventDetailDto>(`/events/${id}`);
    return data;
  },

  list: async () => {
    const { data } = await APIServer.get<EventsDto>('/events');
    return data;
  },

  join: async (id: number) => {
    await APIServer.post(`/events/${id}/join`);
  },

  complete: async ({ id, answer_key }: { id: number; answer_key: string }) => {
    await APIServer.post(`/events/${id}/complete`, { answer_key });
  },

  my: async () => {
    const { data } = await APIServer.get<EventsDto>(`/events/my`);
    return data;
  },
};
