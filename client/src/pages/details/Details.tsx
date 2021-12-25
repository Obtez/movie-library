import React, { useState, useEffect } from "react";
import { searchForShowById, searchForSeasons } from "../../services/api/search";
import { useParams } from "react-router-dom";
import SeasonsList from "../../components/seasons/SeasonsList";
import { Link } from "react-router-dom";

export default function Details() {
  const [showName, setShowName] = useState<string>("");
  const [seasons, setSeasons] = useState([]);
   

  const { id } = useParams();

  useEffect(() => { 
    if (id) {
      searchForShowById(id).then(response => { 
        setShowName(response.name);
      })
      searchForSeasons(id).then(setSeasons);
    }
  }, [])

  

  return (
    <div>
      <Link to="/">Back to Homepage</Link>
      <h2>{ showName }</h2>
      <SeasonsList seasons={seasons} />
    </div>
  )
}