import { searchForShow } from "../../services/api/search"
import { MovieData } from "../../types/movieTypes"

const tidyResults = (results: any[]) => {
  const newResults: MovieData[] = results.map((result: any) => {
    const { id, name } = result.show;
    let image = "";

    // Some shows don't have an image in the API
    if (result.show.image && result.show.image.medium) { 
      image = result.show.image.medium;
    }

    return { id, name, image };
  })

  return newResults;
}

// used in Search.tsx
export const fetchEpisodes = async (search: string) => {
  const results = await searchForShow(search);
  const newResults = tidyResults(results);
  return newResults;
}