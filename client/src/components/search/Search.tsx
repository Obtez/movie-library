import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { searchForShow } from "../../services/api/search";
import { MovieData } from "../../types/movieTypes";


interface Props {
  updateResults: (results: MovieData[]) => void;
}

export default function Search({ updateResults }: Props) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
   }
  
  // const stripResults = (rawResults: any[]): MovieData[] => {
  //   return rawResults.map(r => {
  //     return {
  //       id: r.show.id,
  //       name: r.show.name,
  //       image: r.show.image.medium,
  //     }
  //   })
  // }

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
   <form onSubmit={handleSubmit}>
    <label htmlFor="search">
      Search:
    </label>
    <input type="text" value={search} name="search" id="search" onChange={handleChange} required />

    <button type="submit">Submit</button>
  </form>
  )
}