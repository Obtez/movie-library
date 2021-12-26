import { useState, useEffect, MouseEvent } from "react";
import { searchForEpisodesBySeasonId } from "../../services/api/search";
import EpisodesList from "../episodes/EpisodesList";
import styles from "./Seasons.module.scss";

interface Props {
  season: any;
}

export default function SeasonListItem({ season }: Props) {
  const [episodes, setEpisodes] = useState([]);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showEpisodes, setShowEpisodes] = useState<boolean>(false);

  
  useEffect(() => {
    if (season && episodes.length === 0) {
      searchForEpisodesBySeasonId(season.id).then(setEpisodes);
    }
  }, [season]);

  if (!season) return null;

  const toggleShowDetails = () => { 
    if (showDetails) { 
      setShowEpisodes(false);
    }
    setShowDetails(!showDetails);
  }

  const toggleShowEpisodes = (e: MouseEvent<HTMLElement>) => {
    setShowEpisodes(!showEpisodes);
  }

  const { number, episodeOrder, endDate } = season;

  return (
    <li className={styles.seasonItem} onClick={toggleShowDetails}>
      <h2>Season {number}</h2>

      {
        showDetails ? (
        <div onClick={(e) => e.stopPropagation()}>
          <p>Episodes: {episodeOrder}</p>
          <p>End Date: {endDate}</p>
          <div onClick={toggleShowEpisodes}>
            <h3>Episodes</h3>
            {showEpisodes && <EpisodesList episodes={episodes} />}
          </div>
        </div>
        ) : null
      }
      
    </li>
  )
}