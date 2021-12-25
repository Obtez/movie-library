import React, { useState } from "react"
import { MovieData } from "../../types/movieTypes";
import ShowListItem from "./ShowListItem";

interface Props {
  shows: MovieData[]
}

export default function ShowsList({ shows }: Props) {
  if (!shows) return null;

  return (
    <ul>
      {
        shows.map((show: MovieData) => <ShowListItem key={show.id} show={show} />)
      }
    </ul>
  )
}