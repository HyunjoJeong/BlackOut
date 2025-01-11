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
