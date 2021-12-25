import SeasonListItem from "./SeasonListItem";

interface Props {
  seasons: any[];
}

export default function SeasonsList({ seasons }: Props) {
  if (!seasons) return null;

  return (
    <ul>
      {
        seasons.map((season: any, index: number) => <SeasonListItem key={ season.id} season={season} />)
      }
    </ul>
  )
}