import axios from 'axios';

export const ENDPOINTS = {
  SHOWS: '/shows',
  SEARCH_SHOWS: '/search/shows',
  SHOW_DETAILS: '/shows/',
  SHOW_EPISODES: (showId: string) =>
    `${ENDPOINTS.SHOW_DETAILS + showId}/episodes`,
  EPISODES: (episodeId: string) => `/episodes/${episodeId}`,
  SEARCH_PEOPLE: '/search/people',
};

export const api = axios.create({
  baseURL: 'https://api.tvmaze.com/',
});
