import { useInfiniteQuery } from 'react-query';
import { getPaginatedShows } from '../api/getPaginatedShows';
import { QUERIES } from './queries';

export const useInfiniteShows = () => {
  return useInfiniteQuery(QUERIES.SHOWS, getPaginatedShows, {
    getNextPageParam: (lastPage, pages) => pages.length,
  });
};
