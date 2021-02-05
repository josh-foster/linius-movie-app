import React, { useState ,useEffect } from 'react';
import './App.css';
import Navigation from './component/Navigation'
import Main from './component/Main'

export type Movie = {
  id: number,
  original_title: string,
  poster_path: string,
  vote_average: number
}

function App() {

  const [movies, setMovies] = useState<{movie:Movie}[]>([]);
  const [filter, setFilter] = useState<string>("unsorted")

  const cleanMovieData = (movie:Movie) => {
    const cleanedMovie = {
      id: movie.id,
      original_title: movie.original_title,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average
    };
    return cleanedMovie;
  }

  const getMovies = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=f523c216b4c1bac52a5cd3f701413350&language=en-US&page=1')
    .then((res) => res.json())
    .then((res) => {
      const cleanedMovies = res.results.map(cleanMovieData);
      if(filter==="unsorted"){
        setMovies(cleanedMovies)
      } else if (filter==="sorted"){
        const sortedMovies = cleanedMovies.sort((a:any,b:any) => {
          if(a.vote_average < b.vote_average){
            return 1
          } else {
            return -1
          }
        })
        setMovies(sortedMovies)
      }
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
      <nav className="nav">
        <Navigation
        setFilter={setFilter}
        />
  
      </nav>
      <main className="main">
        <Main 
        movies={movies}
        setFilter={setFilter}/>
      </main>
    </>
  );
}

export default App;
