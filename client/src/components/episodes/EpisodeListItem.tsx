interface Props {
  episode: any;
}

export default function EpisodeListItem({ episode }: Props) {
  if (!episode) return null;

  const { number, name, summary, airdate } = episode;

  const tidySummary = summary.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <li>
      <h2>{number} - {name}</h2>
      {tidySummary}
      <p>Premiered: { airdate }</p>
    </li>
  )
}