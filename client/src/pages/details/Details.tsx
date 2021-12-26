import React, { useState, useEffect } from "react";
import { searchForShowById, searchForSeasons } from "../../services/api/search";
import { useParams } from "react-router-dom";
import SeasonsList from "../../components/seasons/SeasonsList";
import { Link } from "react-router-dom";
import styles from "./Details.module.scss";
import { fetchSeasons, fetchShow } from "../../features/show/showHelpers";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setShow } from "../../features/show/showSlice";

export default function Details() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
   
  const dispatch = useAppDispatch();
  
  const { id } = useParams();
  
  useEffect(() => { 
    setIsLoading(true);
    
  }, [id]);
  const showName = useAppSelector(state => state.shows.name) || "";
  const show = useAppSelector(state => state.shows);

  const getShowData = async () => {
    if (!id) return;

    const completeShowData = await fetchShow(id);
    dispatch(setShow(completeShowData));
    setIsLoading(false);
  };
  

  useEffect(() => {
    setIsLoading(true);
    // first get the whole show
    getShowData()
    // also get the seasons
    // then set the show in redux store
    // then set loading false
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
              <h1 className={styles.showName}>{showName}</h1>
              <p>Watched Episodes: {show.watchedEpisodes} / { show.totalEpisodes }</p>
          <SeasonsList />
        </main>
        )
      }
    </div>
  )
}