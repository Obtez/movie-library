import SeasonListItem from "./SeasonListItem";
import { useAppSelector } from "../../hooks/hooks";
import styles from "./Seasons.module.scss";
import { ExpandedSeasonData } from "../../types/movieTypes";

export default function SeasonsList() {
  const seasons: ExpandedSeasonData[] = useAppSelector(state => state.shows.seasons);
  
  if (!seasons) return null;

  return (
    <ul className={styles.seasonsList}>
      {
        seasons.map((season: ExpandedSeasonData) => <SeasonListItem key={ season.id} seasonID={season.id} />)
      }
    </ul>
  )
}