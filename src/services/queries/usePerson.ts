import { useQuery } from 'react-query';
import { QUERIES } from '.';
import { getPerson } from '../api/getPerson';

export const usePerson = (personId: string) => {
  return useQuery([QUERIES.PERSON_DETAILS, personId], () =>
    getPerson(personId),
  );
};
