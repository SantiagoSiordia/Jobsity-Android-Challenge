import { api, ENDPOINTS, PersonType } from '.';

export const getPerson = async (personId: string) => {
  if (personId === '') {
    return null;
  }
  try {
    const { data } = await api.get<PersonType>(ENDPOINTS.PEOPLE(personId), {
      params: {
        embed: 'castcredits',
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
