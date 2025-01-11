import type { EventDetailDto, EventDto } from '../types';
import { APIServer } from '@/config/axios';

export const fetchEventListData = async () => {
  const { fetchedData }: { fetchedData: EventDto[] } = await APIServer.get('/events/');
  /* setPinData(
    fetchedData.map((event) => ({
      id: Number(event.id),
      title: event.title,
      destination: event.destination,
      coordinates: event.coordinates,
      }))
      ); */
  return fetchedData;
};

export const fetchEventDetails = async (eventId: number) => {
  const { details }: { details: EventDetailDto } = await APIServer.get(`/events/${eventId}`);
  return details;
};

export const postEventJoin = async (eventId: number) => {
  const {
    details,
  }: {
    details: {
      msg: string;
    };
  } = await APIServer.post(`/events/${eventId}/complete`);
  return details;
};

export const postEventComplete = async (eventId: number, answer_key: string) => {
  const {
    details,
  }: {
    details: {
      msg: string;
    };
  } = await APIServer.post(`/events/${eventId}/complete`, { answer_key: answer_key });
  return details;
};
