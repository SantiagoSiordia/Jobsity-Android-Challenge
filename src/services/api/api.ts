import axios from 'axios';

export const ENDPOINTS = {
  SHOWS: '/shows',
};

export const api = axios.create({
  baseURL: 'https://api.tvmaze.com/',
});
