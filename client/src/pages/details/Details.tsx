import React, { useState, useEffect } from "react";
import { searchForShowById, searchForSeasons } from "../../services/api/search";
import { useParams } from "react-router-dom";
import SeasonsList from "../../components/seasons/SeasonsList";
import { Link } from "react-router-dom";
import styles from "./Details.module.scss";

export default function Details() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showName, setShowName] = useState<string>("");
  const [seasons, setSeasons] = useState([]);
   

  const { id } = useParams();

  const fetchShow = async () => {
    if (!id) return;

    const show = await searchForShowById(id);
    setShowName(show.name);
    setIsLoading(false);
  }

  const fetchSeasons = async () => {
    if (!id) return;

    const seasons = await searchForSeasons(id);
    setSeasons(seasons);
  }
  

  useEffect(() => {
    setIsLoading(true);
    fetchShow();
    fetchSeasons();
  }, [id]);

  

  return (
    <div className={styles.detailsContainer}>
      <header>
        <Link to="/">Back to Home</Link>
      </header>
      {
        isLoading ? (
          <p>Loading...</p>
        ) : (
        <main>
          <h1 className={styles.showName}>{ showName }</h1>
          <SeasonsList seasons={seasons} />
        </main>
        )
      }
    </div>
  )
}