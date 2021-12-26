import React, { useState, useEffect } from "react";
import { EpisodeData } from "../../types/movieTypes";
import styles from "./Episodes.module.scss";

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
  }, [episode]);
  
  if (!episode) return null;

  const tidySummary = (summary: string) => { 
    if (!summary) return "";
    return summary.replace(/<\/?[^>]+(>|$)/g, "");
  }

  return (
    <li className={styles.episodeItem} onClick={(e) => e.stopPropagation()}>
      <h5>{episodeData.number} - {episodeData.name}</h5>
      {tidySummary(episodeData.summary)}
      <p>Premiered: { episodeData.airdate }</p>
    </li>
  )
}