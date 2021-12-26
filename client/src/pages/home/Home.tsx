import React, { useState } from "react";
import { useAppSelector } from "../../hooks/hooks";
import Search from "../../components/search/Search";
import ShowsList from "../../components/shows/ShowsList";
import { MovieData } from "../../types/movieTypes";
import styles from "./Home.module.scss";


export default function Home() {
  const results = useAppSelector(state => state.search.result);

  return (
    <main className={styles.container}>
        <header className={styles.headerContainer}>
          <h1>TV-Shows Library</h1>
          <Search />
        </header>
        <section>
          {
            results.length > 0 && <ShowsList shows={results} />
          }
        </section>
    </main>
  )
}