import { getShowsByName, SearchState } from '@services';
import { useQuery } from 'react-query';
import { QUERIES } from './queries';

export const useShowSearchResult = (query: SearchState['query']) => {
  return useQuery([QUERIES.SHOWS, query.queryString, query.searchType], {
    queryFn: () => getShowsByName(query),
  });
};
