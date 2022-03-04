import { getSearchResults, SearchState } from '@services';
import { useQuery } from 'react-query';
import { QUERIES } from './queries';

export const useSearchResults = (query: SearchState['query']) => {
  return useQuery([QUERIES.SHOWS, query.queryString, query.searchType], {
    queryFn: () => getSearchResults(query),
  });
};
