import { APIServer } from '@/config/axios';
import type { EventDetailDto, EventDto } from '../types';

export const getEventList = async () => {
  const { data } = await APIServer.get<EventDto[]>('/events/');
  return data;
};

export const getEventDetail = async (eventId: number) => {
  const { data } = await APIServer.get<EventDetailDto>(`/events/${eventId}/`);
  return data;
};

export const getMyData = async () => {
  const { data } = await APIServer.get<EventDto[]>(`/events/my/`);
  return data;
};

export const postEventJoin = async (eventId: number) => {
  return APIServer.post(`/events/${eventId}/join/`);
};

export const postEventComplete = async (eventId: number, answer_key: string) => {
  return APIServer.post(`/events/${eventId}/complete/`, { answer_key });
};
