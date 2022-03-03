import { getShowEpisode } from '@services';
import { useQuery } from 'react-query';
import { QUERIES } from '.';

export const useEpisode = (episodeId: string) => {
  return useQuery([QUERIES.EPISODE, episodeId], () =>
    getShowEpisode(episodeId),
  );
};
