import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = ({title,movies}) => {

    return (
    <div className='px-4 pb-12'>
        <h1 className='font-bold text-2xl md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
            {
              movies && movies.map((movie)=>
              <Link key={movie.id} to={"/browse/moviedetails?id="+movie.id}>
                <MovieCard movie={movie}/>
              </Link>
              )
            }
        </div>
      </div>
    </div>
  )
}

export default MovieList
