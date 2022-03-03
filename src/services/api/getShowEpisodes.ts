import { api, ENDPOINTS } from '.';

export interface Episode {
  id: number;
  url: string;
  name: string;
  season: number;
  number: number;
  type: string;
  airdate: Date;
  airtime: string;
  airstamp: Date;
  runtime: number;
  rating: Rating;
  image: Image;
  summary: string;
  links: Links;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self: Self;
}

export interface Self {
  href: string;
}

export interface Rating {
  average: number;
}

export const getShowEpisodes = async (showId: string) => {
  if (showId === undefined) {
    return null;
  }
  try {
    const { data } = await api.get<Array<Episode>>(
      ENDPOINTS.SHOW_EPISODES(showId),
    );
    return data;
  } catch (error) {
    throw error;
  }
};
