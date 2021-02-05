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
      <MovieCardList movies={movies}/>
    </>
  );
};

export default Main;
