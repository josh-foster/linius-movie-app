import React from "react";
import styles from "./MovieCardList.module.scss";
import MovieCard from '../MovieCard'
import { Movie } from "../../App";

interface Props {
  movies: {movie:Movie}[];
}

const MovieCardList: React.FC<Props> = ({movies}) => {

  const getMovieTsx = (movie:any) => (
    <div className={styles.card} key={movie.id}>
      <MovieCard movie={movie} />
    </div>
  );

  return (
    <section className={styles.cards}>
      {movies.map(getMovieTsx)}
    </section>
  );
};

export default MovieCardList;
