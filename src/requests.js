import axios from "axios";

const BASE_URL = "https://free-to-play-games-database.p.rapidapi.com/api";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_API_KEY,
  },
});

export const getAll = () => {
  return api.get("/games");
};

export const getByID = (id) => {
  return api.get("/game", {
    id,
  });
};
