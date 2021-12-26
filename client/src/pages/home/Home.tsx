import React, { useState, FormEvent, ChangeEvent } from "react";
import Search from "../../components/search/Search";
import ShowsList from "../../components/shows/ShowsList";
import { searchForShow, searchForSeasons } from "../../services/api/search";
import { MovieData } from "../../types/movieTypes";
import styles from "./Home.module.scss";


export default function Home() {
  const [results, setResults] = useState<MovieData[]>([]);

  const updateResults = (rawResults: any[]) => {
    const strippedResults = rawResults.map((r: any) => {
      const id: number = r.show.id;
      const name: string = r.show.name;
      let image: string = "";
      
      if (r.show.image && r.show.image.medium) {
        image = r.show.image.medium
      }

      return {
        id,
        name,
        image,
      }
    })

    setResults(strippedResults);
  }

  return (
    <main className={styles.container}>
        <header className={styles.headerContainer}>
          <h1>TV-Shows Library</h1>
          <Search updateResults={updateResults} />
        </header>
        <section>
          {
            results.length > 0 && <ShowsList shows={results} />
          }
        </section>
    </main>
  )
}