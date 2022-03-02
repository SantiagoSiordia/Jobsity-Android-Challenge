import axios from 'axios';

export const ENDPOINTS = {
  SHOWS: '/shows',
  SEARCH_SHOWS: '/search/shows',
};

export const api = axios.create({
  baseURL: 'https://api.tvmaze.com/',
});
