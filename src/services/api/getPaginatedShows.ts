import { QueryFunctionContext } from 'react-query';
import { api, ENDPOINTS } from './api';

export interface ShowType {
  averageRuntime: number;
  dvdCountry: null;
  ended: Date;
  externals: Externals;
  genres: string[];
  id: number;
  image: Image | null;
  language: string;
  links: Links;
  name: string;
  network: Network;
  officialSite: string;
  premiered: Date;
  rating: Rating;
  runtime: number;
  schedule: Schedule;
  status: string;
  summary: string;
  type: string;
  updated: number;
  url: string;
  webChannel: null;
  weight: number;
}

export interface Externals {
  imdb: string;
  thetvdb: number;
  tvrage: number;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  previousepisode: Previousepisode;
  self: Previousepisode;
}

export interface Previousepisode {
  href: string;
}

export interface Network {
  country: Country;
  id: number;
  name: string;
}

export interface Country {
  code: string;
  name: string;
  timezone: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  days: string[];
  time: string;
}

export const getPaginatedShows = async (
  context: QueryFunctionContext<string, string>,
) => {
  try {
    const { data } = await api.get<Array<ShowType>>(ENDPOINTS.SHOWS, {
      params: {
        page: context.pageParam,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
