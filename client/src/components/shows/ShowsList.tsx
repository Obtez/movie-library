import React, { useState } from "react"
import { MovieData } from "../../types/movieTypes";
import ShowListItem from "./ShowListItem";
import styles from "./Shows.module.scss";

interface Props {
  shows: MovieData[]
}

export default function ShowsList({ shows }: Props) {
  if (!shows) return null;

  return (
    <ul className={styles.showsList}>
      {
        shows.map((show: MovieData) => <ShowListItem key={show.id} show={show} />)
      }
    </ul>
  )
}