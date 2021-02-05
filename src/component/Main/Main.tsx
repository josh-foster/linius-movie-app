import React from "react";
import { Movie } from "../../App";
import styles from "./Main.module.scss";
import MovieCardList from "../MovieCardList"
import Filter from "../Filter"

interface Props {
  movies: {movie:Movie}[];
}

interface Props {
  setFilter: any;
}

const Main: React.FC<Props> = ({movies, setFilter}) => {

  return (
    <>
    <main className={styles.main}>
      <section className={styles.head}>
        <h2 className={styles.now}>Now Playing</h2>
        <div className={styles.filter}>
        <Filter setFilter={setFilter}/>
        </div>
      </section>
      <MovieCardList movies={movies}/>
    </main>
     
    </>
  );
};

export default Main;
