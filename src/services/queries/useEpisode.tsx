import { useQuery } from 'react-query';
import { QUERIES } from '.';
import { getShowEpisode } from '../api/getShowEpisode';

export const useEpisode = (episodeId: string) => {
  return useQuery([QUERIES.EPISODE, episodeId], () =>
    getShowEpisode(episodeId),
  );
};
