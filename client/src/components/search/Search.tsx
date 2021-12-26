import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { fetchEpisodes } from "../../features/search/searchHelpers";
import { searchForShow } from "../../services/api/search";
import { MovieData } from "../../types/movieTypes";
import { useAppDispatch } from "../../hooks/hooks";
import { setResult } from "../../features/search/searchSlice";
import styles from "./Search.module.scss";

export default function Search() {
  const [search, setSearch] = useState("");

  const dispatch = useAppDispatch();

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
   }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.length > 0) {
      const results = await fetchEpisodes(search);
      dispatch(setResult(results));
      
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