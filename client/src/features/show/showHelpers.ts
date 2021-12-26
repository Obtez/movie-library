import { searchForSeasons, searchForShowById, searchForEpisodesBySeasonId } from "../../services/api/search";
import { MovieData, SeasonData, EpisodeData, ExpandedShowData, ExpandedSeasonData  } from "../../types/movieTypes";


export async function fetchShow(id: string): Promise<ExpandedShowData> {
  // get show data
  const show = await searchForShowById(id);
  // tidy show data
  const showData: MovieData = tidyShowData(show);
  const seasonsData: ExpandedSeasonData[] = await fetchCompleteSeasonData(id);

  return { ...showData, seasons: seasonsData };
}

export async function fetchSeasons(id: string): Promise<SeasonData[]> {
  // get seasons data
  const seasons = await searchForSeasons(id);
  // tidy seasons data
  const seasonsData: SeasonData[] = seasons.map(tidySeasonData);
  return seasonsData;
}

async function fetchEpisodes(id: string): Promise<EpisodeData[]> {
  // get episodes data
  const episodes = await searchForEpisodesBySeasonId(id);
  // tidy episodes data
  const episodesData: EpisodeData[] = episodes.map(tidyEpisodeData);

  return episodesData;
}

async function fetchCompleteSeasonData(id: string): Promise<ExpandedSeasonData[]> {
  const seasonData: SeasonData[] = await fetchSeasons(id);
  const seasons: ExpandedSeasonData[] = [];
  for (const season of seasonData) {
    const episodes: EpisodeData[] = await fetchEpisodes(season.id.toString());
    seasons.push({ ...season, episodes });
  }

  return seasons;
}

function tidyShowData(data: any): MovieData {
  const id: number = data.id;
  const name: string = data.name;
  const image: string = data.image ? data.image.medium : "";

  return { id, name, image };
} 

function tidySeasonData(data: any): SeasonData {
  const id: number = data.id;
  const number: number = data.number;
  const endDate: string = data.endDate;

  return { id, number, endDate };
}

function tidyEpisodeData(data: any): EpisodeData {
  const id: number = data.id;
  const number: number = data.number;
  const name: string = data.name;
  const summary: string = tidyEpisodeSummary(data.summary);
  const airdate: string = data.airdate;

  return { id, number, name, summary, airdate };
}

function tidyEpisodeSummary(summary: string): string {
  if (summary) {
    return summary.replace(/<\/?[^>]+(>|$)/g, "");
  } else {
    return "";
  }
}