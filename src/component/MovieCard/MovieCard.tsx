import React from "react";
import styles from "./MovieCard.module.scss";
import { Movie } from "../../App";
import { motion } from 'framer-motion';

interface Props {
  movie: Movie;
  opacityDelay:number;
}

const MovieCard: React.FC<Props> = ({movie,opacityDelay}) => {
  
  
  const poster:string = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;

  return (
    <>
      <motion.article 
      animate={{opacity:1}} 
      initial={{opacity:0}} 
      transition={{delay:opacityDelay, duration:2}} 
      className={styles.card}>
        <img className={styles.poster} src={poster} alt=""/>
        <section className={styles.info}>
          <h2>{movie.original_title}</h2>
          <section className={styles.rating}>
            <p>{movie.vote_average}</p>
            <img className={styles.star} src="star.png" alt=""/>
          </section>
        </section>
        
      </motion.article>

      
    </>
  );
};

export default MovieCard;