import React from "react";
import styles from "./MovieCard.module.scss";
import { Movie } from "../../App";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({movie}) => {

  const poster:string = `https://image.tmdb.org/t/p/w200${movie.poster_path}`

  return (
    <>
      <article className={styles.card}>
        <h2>{movie.original_title}</h2>
        <img src={poster} alt=""/>
        <p>{movie.vote_average}/10 </p>
      </article>
    </>
  );
};

export default MovieCard;