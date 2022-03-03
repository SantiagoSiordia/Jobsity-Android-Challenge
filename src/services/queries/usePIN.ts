import { useQuery } from 'react-query';
import { QUERIES } from '.';
import { getPIN } from '../secure-store';

export const usePIN = () => {
  return useQuery([QUERIES.PIN], getPIN);
};
