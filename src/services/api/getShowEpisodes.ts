import { api, ENDPOINTS, Image, Links, Rating } from '.';

export interface Episode {
  airdate: Date;
  airstamp: Date;
  airtime: string;
  id: number;
  image: Image | null;
  links: Links;
  name: string;
  number: number;
  rating: Rating;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}

export interface Self {
  href: string;
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
