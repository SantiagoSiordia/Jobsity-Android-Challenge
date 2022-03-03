import { getShow } from '@services';
import { useQuery } from 'react-query';
import { QUERIES } from '.';

export const useShow = (showId: string) => {
  return useQuery([QUERIES.SHOW_DETAILS, showId], () => getShow(showId));
};
