export interface MovieData {
  id: number;
  name: string;
  image: string;
  totalEpisodes: number;
  watchedEpisodes: number;
}

export interface ExpandedShowData {
  id: number;
  name: string;
  image: string;
  totalEpisodes: number;
  watchedEpisodes: number;
  seasons: ExpandedSeasonData[];
}

export interface SeasonData {
  id: number;
  number: number;
  endDate: string;
}

export interface ExpandedSeasonData {
  id: number;
  number: number;
  endDate: string;
  episodes: EpisodeData[];
}

export interface EpisodeData {
  id: number;
  number: number;
  name: string;
  summary: string;
  airdate: string;
  watched: boolean;
}
