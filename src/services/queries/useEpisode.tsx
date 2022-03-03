import { useQuery } from 'react-query';
import { QUERIES } from '.';
import { getShowEpisode } from '@services';

export const useEpisode = (episodeId: string) => {
  return useQuery([QUERIES.EPISODE, episodeId], () =>
    getShowEpisode(episodeId),
  );
};
