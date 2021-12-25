export const BASE_URL = "https://api.tvmaze.com/";

// Search for shows my title
export const SEARCH_QUERY = "search/shows?q=";

// Search for seasons of specific show (id)
export const SEASONS_QUERY = (id: string) => {
  return `shows/${id}/seasons`
}

// Search for specific show (id)
export const SHOW_QUERY = (id: string) => { 
  return `shows/${id}`
}

// Search for episodes of season (id)
export const EPISODES_QUERY = (id: string) => { 
  return `seasons/${id}/episodes`
}