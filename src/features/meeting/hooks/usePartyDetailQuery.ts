import { useQuery } from '@tanstack/react-query';
import { getPartyDetail } from '../apis';

const PARTY_DETAIL_QUERY_KEY = 'PARTY_DETAIL_QUERY_KEY';

export const usePartyDetailQuery = (partyId: number) => {
  return useQuery({
    queryKey: [PARTY_DETAIL_QUERY_KEY, partyId],
    queryFn: () => getPartyDetail(partyId),
  });
};
