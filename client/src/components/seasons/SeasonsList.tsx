import SeasonListItem from "./SeasonListItem";
import styles from "./Seasons.module.scss";

interface Props {
  seasons: any[];
}

export default function SeasonsList({ seasons }: Props) {
  if (!seasons) return null;

  return (
    <ul className={styles.seasonsList}>
      {
        seasons.map((season: any, index: number) => <SeasonListItem key={ season.id} season={season} />)
      }
    </ul>
  )
}