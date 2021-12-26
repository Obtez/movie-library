import React, { useState, useEffect } from "react";
import { MovieData } from "../../types/movieTypes";
import { useAppDispatch } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { setShow } from "../../features/show/showSlice";
import styles from "./Shows.module.scss";

interface Props {
  show: MovieData;
}

export default function ShowListItem({ show }: Props) {
  const [seasons, setSeasons] = useState([]);
  const navigator = useNavigate();
  const dispatch = useAppDispatch();
  
  if (!show) return null;

  
  const { id, name, image } = show;

  const navigateToDetails = () => {
    navigator(`/details/${id}`);
  }

  return (
   <li className={styles.showItem}>
    {
      image && <img src={ image } alt={ name } />
    }
    <div className={styles.cardTextContainer}>
      <h2>{ name }</h2>
      <button onClick={navigateToDetails}>Get Details</button>
    </div>
  </li>
  )
}