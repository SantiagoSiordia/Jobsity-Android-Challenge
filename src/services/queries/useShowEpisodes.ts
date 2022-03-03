import { useQuery, useQueryClient } from 'react-query';
import { QUERIES } from '.';
import { getShowEpisodes } from '../api/getShowEpisodes';

export const useShowEpisodes = (showId: string) => {
  const queryClient = useQueryClient();
  return useQuery(
    [QUERIES.SHOW_EPISODES, showId],
    () => getShowEpisodes(showId),
    {
      onSuccess: data => {
        data?.forEach(episode => {
          queryClient.setQueryData([QUERIES.EPISODE, episode.id], data);
        });
      },
    },
  );
};
