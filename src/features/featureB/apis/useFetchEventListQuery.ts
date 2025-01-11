import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { EventDto } from '../types';

export const FETCH_EVENT_LIST = 'FETCH_EVENT_LIST';

const fetchEventListData = async () => {
  const { fetchedData }: { fetchedData: EventDto[] } = await axios.get('/api/events');
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

export const useFetchEventListQuery = () => {
  return useQuery({ queryKey: [FETCH_EVENT_LIST], queryFn: fetchEventListData });
};
