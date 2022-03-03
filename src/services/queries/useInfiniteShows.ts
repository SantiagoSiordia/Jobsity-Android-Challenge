import { useInfiniteQuery, useQueryClient } from 'react-query';
import { getPaginatedShows } from '../api/getPaginatedShows';
import { QUERIES } from './queries';

export const useInfiniteShows = () => {
  const queryClient = useQueryClient();
  return useInfiniteQuery(QUERIES.SHOWS, getPaginatedShows, {
    getNextPageParam: (_lastPage, pages) => pages.length,
    onSuccess: data => {
      data.pages[data.pages.length - 1].forEach(show => {
        queryClient.setQueryData([QUERIES.SHOW_DETAILS, show.id], show);
      });
    },
  });
};
