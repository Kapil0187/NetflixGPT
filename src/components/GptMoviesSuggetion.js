import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMoviesSuggetion = () => {
  const movie = useSelector(store=>store.gpt.gptMovies)
  if(!movie)
    return <div className='mt-[100%]'></div>;
  return (
    <div className='p-4 m-4 bg-black text-white'>
      <MovieList title={"Movie"} movies={movie}/>
    </div>
  )
}

export default GptMoviesSuggetion
