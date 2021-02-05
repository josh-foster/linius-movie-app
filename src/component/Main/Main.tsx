import React from "react";
import { Movie } from "../../App";
import styles from "./Main.module.scss";
import MovieCardList from "../MovieCardList"

interface Props {
  movies: {movie:Movie}[];
}

const Main: React.FC<Props> = ({movies}) => {

  return (
    <>
    <main className={styles.main}>
      <h2 className={styles.now}>Now Playing</h2>
      <MovieCardList movies={movies}/>
    </main>
     
    </>
  );
};

export default Main;
