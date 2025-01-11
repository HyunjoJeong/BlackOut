import { useQuery } from '@tanstack/react-query';
import { EventDto } from '../types';
import { getEventList } from '../apis';

export const FETCH_EVENT_LIST = 'FETCH_EVENT_LIST';

export const useFetchEventListQuery = (p0: { onSuccess: (fetchedData: EventDto[]) => void }) => {
  return useQuery({ queryKey: [FETCH_EVENT_LIST], queryFn: getEventList });
};
