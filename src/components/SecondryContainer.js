import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {

  const movies = useSelector(store=>store.movies)
 
  return (
        <div className='bg-black'>
          <div className='mt-0 md:-mt-44 pl-4 md:pl-8 relative z-20'>
            {movies.nowPlayingMovies && <MovieList title={"Now Playing Movies"} movies={movies.nowPlayingMovies}/>}
            {movies.topRatedMovies && <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>}
            {movies.popularMovies && <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>}
            {movies.upcomingMovies && <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>}
          </div>
        </div>
  )
}

export default SecondryContainer
