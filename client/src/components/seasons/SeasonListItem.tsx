import React, { useState, useEffect } from "react";
import { searchForEpisodesBySeasonId } from "../../services/api/search";
import EpisodeListItem from "../episodes/EpisodeListItem";
import EpisodesList from "../episodes/EpisodesList";
import styles from "./Seasons.module.scss";

interface Props {
  season: any;
}

export default function SeasonListItem({ season }: Props) {
  const [episodes, setEpisodes] = useState([]);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  
  useEffect(() => {
    if (season && episodes.length === 0) {
      searchForEpisodesBySeasonId(season.id).then(setEpisodes);
    }
  }, [season]);

  if (!season) return null;

  const toggleShowDetails = () => { 
    setShowDetails(!showDetails);
  }

  const { number, episodeOrder, endDate } = season;

  return (
    <li className={styles.seasonItem} onClick={toggleShowDetails}>
      <h2>Season {number}</h2>

      {
        showDetails ? (
        <div>
          <p>Episodes: {episodeOrder}</p>
          <p>End Date: {endDate}</p>
          <h3>Episodes</h3>
          <EpisodesList  episodes={episodes} />
        </div>
        ) : null
      }
      
    </li>
  )
}