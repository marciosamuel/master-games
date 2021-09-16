import axios, { AxiosPromise } from 'axios';
import { FiltersProps } from '../components/Filters';
import { GameProps } from '../components/GameCard';

const BASE_URL = 'https://free-to-play-games-database.p.rapidapi.com/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': import.meta.env.VITE_API_KEY,
  },
});

const getGames = (filters: FiltersProps): AxiosPromise => {
  return api.get<GameProps[]>(`/games`, { params: { ...filters } });
};

export default getGames;
