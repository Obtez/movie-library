import React, { useState, useEffect } from "react";
import { MovieData } from "../../types/movieTypes";
import { searchForSeasons } from "../../services/api/search";
import { useNavigate } from "react-router-dom";

interface Props {
  show: MovieData;
}

export default function ShowListItem({ show }: Props) {
  const [seasons, setSeasons] = useState([]);
  const navigator = useNavigate();
  
  if (!show) return null;

  
  const { id, name, image } = show;

  const navigateToDetails = () => {
    navigator(`/details/${id}`);
  }

  return (
   <li>
    <h2>{ name }</h2>
    {
      image && <img src={ image } alt={ name } />
    }
    <button onClick={navigateToDetails}>Get Seasons</button>
  </li>
  )
}