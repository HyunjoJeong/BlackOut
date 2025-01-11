import { useQuery } from '@tanstack/react-query';
import { fetchEventDetails } from '../apis';

export const FETCH_EVENT_DETAIL = 'FETCH_EVENT_DETAIL';

export const useFetchEventDetailQuery = (selectedId: number | null) => {
  return useQuery({
    queryKey: ['eventDetails', selectedId],
    queryFn: () => fetchEventDetails(selectedId!),
    enabled: selectedId !== null,
  });
};
