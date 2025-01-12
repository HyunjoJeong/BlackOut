import { QueryClient } from '@tanstack/react-query';

export const defaultQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: 0,
      gcTime: 0,
    },
  },
});
