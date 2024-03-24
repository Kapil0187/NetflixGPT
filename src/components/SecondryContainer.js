import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {

  const movies = useSelector(store=>store.movies)
 
  return (
        <div className=' bg-black'>
          <div className='-mt-44 pl-8 relative z-20'>
            {movies.nowPlayingMovies  && <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>}
            {movies.poularMoies && <MovieList title={"Popular Movies"} movies={movies.poularMoies}/>}
            {movies.nowPlayingMovies  && <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>}
            {movies.nowPlayingMovies  && <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>}
            {movies.nowPlayingMovies  && <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>}
          </div>
        </div>
  )
}

export default SecondryContainer
