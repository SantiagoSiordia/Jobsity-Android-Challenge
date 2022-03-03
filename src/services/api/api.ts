import axios from 'axios';

export const ENDPOINTS = {
  SHOWS: '/shows',
  SEARCH_SHOWS: '/search/shows',
  SHOW_DETAILS: '/shows/',
  SHOW_EPISODES: (showId: string) =>
    `${ENDPOINTS.SHOW_DETAILS + showId}/episodes`,
};

export const api = axios.create({
  baseURL: 'https://api.tvmaze.com/',
});
