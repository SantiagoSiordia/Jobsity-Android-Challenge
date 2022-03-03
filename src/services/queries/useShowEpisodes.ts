import { useQuery } from 'react-query';
import { QUERIES } from '.';
import { getShowEpisodes } from '../api/getShowEpisodes';

export const useShowEpisodes = (showId: string) => {
  return useQuery([QUERIES.SHOW_EPISODES, showId], () =>
    getShowEpisodes(showId),
  );
};
