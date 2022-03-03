import { api, ENDPOINTS, ShowType } from '.';

export const getShow = async (showId: string) => {
  if (showId === '') {
    return null;
  }
  try {
    const { data } = await api.get<ShowType>(ENDPOINTS.SHOW_DETAILS + showId);
    return data;
  } catch (error) {
    throw error;
  }
};
