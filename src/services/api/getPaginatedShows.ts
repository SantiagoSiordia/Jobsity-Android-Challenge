import { QueryFunctionContext } from 'react-query';
import { api, ENDPOINTS } from './api';

export interface ShowType {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: Date;
  ended: Date;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: null;
  dvdCountry: null;
  externals: Externals;
  image: Image | null;
  summary: string;
  updated: number;
  links: Links;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: Previousepisode;
  previousepisode: Previousepisode;
}

export interface Previousepisode {
  href: string;
}

export interface Network {
  id: number;
  name: string;
  country: Country;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Rating {
  average: number;
}

export interface Schedule {
  time: string;
  days: string[];
}

export const getPaginatedShows = async (
  context: QueryFunctionContext<string, any>,
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
