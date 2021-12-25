import React, { useState, useEffect } from "react";
import { searchForEpisodesBySeasonId } from "../../services/api/search";
import EpisodeListItem from "../episodes/EpisodeListItem";
import EpisodesList from "../episodes/EpisodesList";

interface Props {
  season: any;
}

export default function SeasonListItem({ season }: Props) {
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(() => {
    if (season) {
      searchForEpisodesBySeasonId(season.id).then(setEpisodes);
    }
  }, [])

  if (!season) return null;

  const { number, episodeOrder, endDate } = season;

  return (
    <li>
      <h2>Season {number}</h2>
      <p>Episodes: {episodeOrder}</p>
      <p>End Date: {endDate}</p>
      <h3>Episodes</h3>
      <EpisodesList  episodes={episodes} />
    </li>
  )
}