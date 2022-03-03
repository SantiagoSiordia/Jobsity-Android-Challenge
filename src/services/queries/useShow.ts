import { useQuery } from 'react-query';
import { QUERIES } from '.';
import { getShow } from '@services';

export const useShow = (showId: string) => {
  return useQuery([QUERIES.SHOW_DETAILS, showId], () => getShow(showId));
};
