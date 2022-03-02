import { useQuery } from 'react-query';
import { getShowsByName } from '../api/getShowsByName';
import { QUERIES } from './queries';

export const useShowSearchResult = (q: string) => {
  return useQuery([QUERIES.SHOWS, q], {
    queryFn: () => getShowsByName(q),
  });
};
