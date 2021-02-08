import React, { useState ,useEffect } from 'react';
import styles from "./Main.module.scss";
import MovieCardList from "../MovieCardList"
import Filter from "../Filter"
import { motion } from 'framer-motion';
import { Movie } from "../../App";


const Main: React.FC = () => {

  const [movies, setMovies] = useState<{movie:Movie}[]>([]);
  const [filter, setFilter] = useState<string>("unsorted");

  const cleanMovieData = (movie:Movie) => {
    const cleanedMovie = {
      id: movie.id,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average
    };
    return cleanedMovie;
  }

  const apiCall:string = "https://api.themoviedb.org/3/movie/now_playing?api_key=f523c216b4c1bac52a5cd3f701413350&language=en-US&page=1";

  const sortMovies = (filter:string, cleanedMovies:any) => {
    if(filter==="unsorted"){
      setMovies(cleanedMovies);
    } else if (filter==="sorted"){
      const sortedMovies = cleanedMovies.sort((movie1:Movie,movie2:Movie) => {
        if(movie1.vote_average < movie2.vote_average){
          return 1;
        } else {
          return -1;
        }
      })
      setMovies(sortedMovies);
    }
  }

  const getMovies = () => {
    fetch(apiCall)
    .then((res) => res.json())
    .then((res) => {
      const cleanedMovies = res.results.map(cleanMovieData);
      sortMovies(filter, cleanedMovies);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getMovies();
  },[])

  useEffect(() => {
    getMovies();
  },[filter])

  return (
    <>
      <main className={styles.main}>
        <section className={styles.head}>
          <motion.h2 
          animate={{opacity:1}} 
          initial={{opacity:0.2}} 
          transition={{delay:1, duration:2}} 
          className={styles.now}
          >
            Now Playing
          </motion.h2>
          
          <motion.div 
          animate={{opacity:1}}
          initial={{opacity:0}}
          transition={{delay:1.5, duration:2}}
          className={styles.filter}
          >
            <Filter setFilter={setFilter}/>
          </motion.div>
        </section>
        <MovieCardList movies={movies}/>
      </main>
    </>
  );
};

export default Main;
