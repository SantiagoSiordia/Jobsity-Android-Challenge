import { SearchState } from '@services';
import { api, ENDPOINTS, Image, ShowType } from '.';

export interface PersonResponse {
  person: PersonType;
  score: number;
}

export interface ShowResponse {
  score: number;
  show: ShowType;
}

export interface PersonType {
  _embedded: {
    castcredits: Array<{
      _links: {
        character: Self;
        show: Self;
      };
      self: string | false;
      voice: boolean;
    }>;
  };
  _links: Links;
  birthday: string | null;
  country: string | null;
  deathday: string | null;
  gender: string | null;
  id: number;
  image: Image | null;
  name: string;
  updated: number;
  url: string;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export const getSearchResults = async (query: SearchState['query']) => {
  if (query.queryString === '') {
    return null;
  }
  try {
    const { data } = await api.get<Array<ShowResponse | PersonResponse>>(
      query.searchType === 'show'
        ? ENDPOINTS.SEARCH_SHOWS
        : ENDPOINTS.SEARCH_PEOPLE,
      {
        params: {
          q: query.queryString,
        },
      },
    );
    return data;
  } catch (error) {
    throw error;
  }
};
