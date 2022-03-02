import { api, ENDPOINTS } from '.';

export const getShowsByName = async (q: string) => {
  try {
    const { data } = await api.get(ENDPOINTS.SEARCH_SHOWS, {
      params: {
        q,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
