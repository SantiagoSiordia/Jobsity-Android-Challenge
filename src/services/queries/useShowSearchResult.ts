import { getShowsByName } from '@services';
import { useQuery } from 'react-query';
import { QUERIES } from './queries';

export const useShowSearchResult = (q: string) => {
  return useQuery([QUERIES.SHOWS, q], {
    queryFn: () => getShowsByName(q),
  });
};
