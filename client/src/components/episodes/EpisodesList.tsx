import EpisodeListItem from "./EpisodeListItem";

interface Props {
  episodes: any[];
}

export default function EpisodesList({ episodes }: Props) {
  if (!episodes) return null;

  return (
    <ul>
      {
        episodes.map((episode: any) => <EpisodeListItem key={episode.id} episode={episode} />)
      }
    </ul>
  )
}