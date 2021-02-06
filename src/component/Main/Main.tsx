import React from "react";
import { Movie } from "../../App";
import styles from "./Main.module.scss";
import MovieCardList from "../MovieCardList"
import Filter from "../Filter"
import { motion } from 'framer-motion';

interface Props {
  movies: {movie:Movie}[];
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Main: React.FC<Props> = ({movies, setFilter}) => {

  return (
    <>
      <main className={styles.main}>
        <section className={styles.head}>
          <motion.h2 animate={{opacity:1}} initial={{opacity:0}} transition={{delay:3, duration:2}} className={styles.now}>Now Playing</motion.h2>
          <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{delay:4, duration:2}} className={styles.filter}>
          <Filter setFilter={setFilter}/>
          </motion.div>
        </section>
        <MovieCardList movies={movies}/>
      </main>
    </>
  );
};

export default Main;
