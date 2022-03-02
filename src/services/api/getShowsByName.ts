import { api, ENDPOINTS, ShowType } from '.';

export const getShowsByName = async (q: string) => {
  if (q === '') {
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
        q,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
