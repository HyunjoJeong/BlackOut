import { useQuery } from '@tanstack/react-query';
import { getPartyList } from '../apis';

const PARTY_LIST_QUERY_KEY = 'PARTY_LIST_QUERY_KEY';

export const usePartyListQuery = () => {
  return useQuery({
    queryKey: [PARTY_LIST_QUERY_KEY],
    queryFn: () => getPartyList(),
  });
};
