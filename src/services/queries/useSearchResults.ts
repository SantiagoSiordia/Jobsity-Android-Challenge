import { getSearchResults, SearchState } from '@services';
import { useQuery, useQueryClient } from 'react-query';
import { QUERIES } from './queries';

export const useSearchResults = (query: SearchState['query']) => {
  const queryClient = useQueryClient();

  return useQuery([QUERIES.SEARCH, query.queryString, query.searchType], {
    queryFn: () => getSearchResults(query),
    onSuccess: data => {
      data?.forEach(element => {
        queryClient.setQueryData(
          query.searchType === 'show'
            ? [QUERIES.SHOW_DETAILS, element.show.id]
            : [QUERIES.PERSON_DETAILS, element.person.id],
          query.searchType === 'show' ? element.show : element.person,
        );
      });
    },
  });
};
