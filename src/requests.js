import axios from "axios";

const BASE_URL = "https://free-to-play-games-database.p.rapidapi.com/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.API_KEY,
  },
});

export const getAll = () => {
  return api.get("/games", {
    "sort-by": "alphabetical",
  });
};

export const getByID = (id) => {
  return api.get("/game", {
    id,
  });
};

export const getByFilters = (filters) => {
  return api.get("/games", {
    filters,
  });
};
