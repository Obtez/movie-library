import React, { useState, useEffect } from "react";
import { EpisodeData, SeasonData, ExpandedSeasonData, ExpandedShowData } from "../../types/movieTypes";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setShow } from "../../features/show/showSlice";
import styles from "./Episodes.module.scss";

interface Props {
  episode: any;
}

const emptyEpisode: EpisodeData = {
  id: 0,
  number: 0,
  name: "",
  summary: "",
  airdate: "",
  watched: false,
}

export default function EpisodeListItem({ episode }: Props) {
  const [episodeData, setEpisodeData] = useState<EpisodeData>(emptyEpisode);
  const dispatch = useAppDispatch();
  const show = useAppSelector(state => state.shows);
  
  useEffect(() => { 
    setEpisodeData(episode);
  }, [episode]);
  
  if (!episode) return null;

  const updateEpisodeInShow = () => {
    const seasons: ExpandedSeasonData[] = show.seasons;
    const episodeId: number = episodeData.id;
    
    // find season
    const season = seasons
    .find(season => season.episodes.find(episode => episode.id === episodeId));
    
    if (!season) return;

    // find episode
    const episode = season.episodes.find(episode => episode.id === episodeId);

    // update episode
    const updatedEpisode = {
      ...episodeData,
      watched: !episodeData.watched,
    }

    // update season
    const updatedSeason = {
      ...season,
      episodes: season.episodes.map(episode => episode.id === updatedEpisode.id ? updatedEpisode : episode),
    }

    // update show
    const updatedShow = {
      ...show,
      seasons: seasons.map(season => season.id === updatedSeason.id ? updatedSeason : season),
    }

    dispatch(setShow(updatedShow));
  }

  const handleClick = () => {
    updateEpisodeInShow();
  }

  const tidySummary = (summary: string) => { 
    if (!summary) return "";
    return summary.replace(/<\/?[^>]+(>|$)/g, "");
  }

  return (
    <li className={styles.episodeItem} onClick={(e) => e.stopPropagation()}>
      <h5>{episodeData.number} - {episodeData.name}</h5>
      {tidySummary(episodeData.summary)}
      <p>Premiered: {episodeData.airdate}</p>
      <button onClick={handleClick}>Complete</button>
      {episodeData.watched && <p>Completed</p>}
    </li>
  )
}