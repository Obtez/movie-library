import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { searchForShow } from "../../services/api/search";
import { MovieData } from "../../types/movieTypes";
import styles from "./Search.module.scss";


interface Props {
  updateResults: (results: MovieData[]) => void;
}

export default function Search({ updateResults }: Props) {
  const [search, setSearch] = useState("");

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
   }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.length > 0) {
        searchForShow(search).then(response => {
          updateResults(response)
        }).catch(error => {
          console.log(error);
      })
    }
  }

  return (
   <form className={styles.searchForm} onSubmit={handleSubmit}>
    <label htmlFor="search">
      {/* Search for a show */}
    </label>
    <input type="search" value={search} name="search" id="search" onChange={handleChange} placeholder="Search for a show" required />

    <button type="submit">Search</button>
  </form>
  )
}