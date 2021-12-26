import { BASE_URL, SEARCH_QUERY, SEASONS_QUERY, SHOW_QUERY, EPISODES_QUERY } from "./_constants"
import axios from "axios"

export const searchForShow = async (query: string) => {
  const response = await axios(`${BASE_URL}${SEARCH_QUERY}${query}`)
  return response.data;
}

export const searchForSeasons = async (id: string) => {
  const response = await axios(`${BASE_URL}${SEASONS_QUERY(id)}`);
  return response.data;
}

export const searchForShowById = async (id: string) => {
  const response = await axios(`${BASE_URL}${SHOW_QUERY(id)}`);
  return response.data;
}

export const searchForEpisodesBySeasonId = async (id: string) => { 
  const response = await axios(`${BASE_URL}${EPISODES_QUERY(id)}`);
  return response.data;
}