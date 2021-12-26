export interface MovieData {
  id: number;
  name: string;
  image: string;
}

export interface ExpandedShowData {
  id: number;
  name: string;
  image: string;
  seasons: SeasonData[];
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
}
