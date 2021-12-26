import { useState, useEffect, MouseEvent } from "react";
import { searchForEpisodesBySeasonId } from "../../services/api/search";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import EpisodesList from "../episodes/EpisodesList";
import styles from "./Seasons.module.scss";

interface Props {
  seasonID: number;
}

export default function SeasonListItem({ seasonID }: Props) {
  const [episodes, setEpisodes] = useState([]);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showEpisodes, setShowEpisodes] = useState<boolean>(false);

  
  const dispatch = useAppDispatch();
  const season = useAppSelector(state => state.shows.seasons.find(season => season.id === seasonID));
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

  const { number, endDate } = season;

  return (
    <li className={styles.seasonItem} onClick={toggleShowDetails}>
      <h2>Season {number}</h2>

      {
        showDetails ? (
        <div onClick={(e) => e.stopPropagation()}>
          <p>Episodes: {season.episodes.length}</p>
          <p>End Date: {endDate}</p>
          <div onClick={toggleShowEpisodes}>
            <h3>Episodes</h3>
            {showEpisodes && <EpisodesList episodes={season.episodes} />}
          </div>
        </div>
        ) : null
      }
      
    </li>
  )
}