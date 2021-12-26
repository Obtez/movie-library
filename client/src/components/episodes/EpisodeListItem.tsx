import React, { useState, useEffect } from "react";
import { EpisodeData } from "../../types/movieTypes";

interface Props {
  episode: any;
}

const emptyEpisode: EpisodeData = {
  id: 0,
  number: 0,
  name: "",
  summary: "",
  airdate: "",
}

export default function EpisodeListItem({ episode }: Props) {
  const [episodeData, setEpisodeData] = useState<EpisodeData>(emptyEpisode)

  
  useEffect(() => {
    if (episodeData === emptyEpisode) {
      setEpisodeData({
        id: episode.id,
        number: episode.number,
        name: episode.name,
        summary: episode.summary,
        airdate: episode.airdate,
      })
    }
  })
  
  if (!episode) return null;

  const tidySummary = (summary: string) => { 
    if (!summary) return "";
    return summary.replace(/<\/?[^>]+(>|$)/g, "");
  }

  return (
    <li>
      <h2>{episodeData.number} - {episodeData.name}</h2>
      {tidySummary(episodeData.summary)}
      <p>Premiered: { episodeData.airdate }</p>
    </li>
  )
}