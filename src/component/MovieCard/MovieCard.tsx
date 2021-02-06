import React from "react";
import styles from "./MovieCard.module.scss";
import { Movie } from "../../App";

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({movie}) => {

  const poster:string = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  return (
    <>
      <article className={styles.card}>
        <img className={styles.poster} src={poster} alt=""/>
        <section className={styles.info}>
          <h2>{movie.original_title}</h2>
          <section className={styles.rating}>
            <p>{movie.vote_average}</p>
            <img className={styles.star} src="star.png" alt=""/>
          </section>
        </section>
        
      </article>

      
    </>
  );
};

export default MovieCard;