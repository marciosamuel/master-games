import axios from 'axios';

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
  },
});

export default function getGames(filters) {
  return api.get(`/games`, { params: { ...filters } });
}
