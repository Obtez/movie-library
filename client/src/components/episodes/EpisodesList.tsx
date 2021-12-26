import EpisodeListItem from "./EpisodeListItem";
import styles from "./Episodes.module.scss";

interface Props {
  episodes: any[];
}

export default function EpisodesList({ episodes }: Props) {
  if (!episodes) return null;

  return (
    <ul className={styles.episodesList}>
      {
        episodes.map((episode: any) => <EpisodeListItem key={episode.id} episode={episode} />)
      }
    </ul>
  )
}