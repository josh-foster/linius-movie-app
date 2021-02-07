import React, { useState } from "react";
import styles from "./MovieCardList.module.scss";
import MovieCard from '../MovieCard'
import { Movie } from "../../App";
import { motion } from 'framer-motion';

interface Props {
  movies: {movie:Movie}[];
}

const MovieCardList: React.FC<Props> = ({movies}) => {

  let opacityDelay:number = 0.2

  const getMovieTsx = (movie:any) => (
    <motion.div whileHover={{scale:1.1}} transition={{duration:0.5, type:"tween"}} className={styles.card} key={movie.id}>
      <MovieCard opacityDelay={opacityDelay += 0.2} movie={movie} />
    </motion.div>
  );

  return (
    <section className={styles.cards}>
      {movies.map(getMovieTsx)}
    </section>
  );
};

export default MovieCardList;
