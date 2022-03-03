import { api, ENDPOINTS } from '.';
import { Episode } from './getShowEpisodes';

export const getShowEpisode = async (episodeId: string) => {
  try {
    const { data } = await api.get<Episode>(ENDPOINTS.EPISODES(episodeId));
    return data;
  } catch (error) {
    throw error;
  }
};
