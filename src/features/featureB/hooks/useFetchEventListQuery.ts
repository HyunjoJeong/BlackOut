import { useQuery } from '@tanstack/react-query';
import { getEventList } from '../apis';

export const FETCH_EVENT_LIST = 'FETCH_EVENT_LIST';

export const useFetchEventListQuery = () => {
  return useQuery({ queryKey: [FETCH_EVENT_LIST], queryFn: getEventList });
};
