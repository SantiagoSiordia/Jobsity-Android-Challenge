import { SearchState } from '@services';
import { api, ENDPOINTS, ShowType } from '.';

export const getShowsByName = async (query: SearchState['query']) => {
  if (query.queryString === '') {
    return null;
  }
  try {
    const { data } = await api.get<
      Array<{
        score: number;
        show: ShowType;
      }>
    >(ENDPOINTS.SEARCH_SHOWS, {
      params: {
        q: query.queryString,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
