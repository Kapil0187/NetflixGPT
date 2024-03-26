import React from 'react'
import { IMG_CDN_URL,NOT_FOUND_CDN_URL} from '../utils/constants'

const MovieCard = (movie) => {
  
  const {poster_path,original_title,release_date} = movie.movie;
  
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img 
        className='rounded-lg'
        alt='Img' 
        src={poster_path?IMG_CDN_URL+""+poster_path:NOT_FOUND_CDN_URL}
      ></img>
      <div className='text-white pt-4'>
        <h1>{original_title.length<=20?original_title:original_title.substring(1,20)+"...."}</h1>
        <h2>{release_date}</h2>
      </div>
    </div>
  )
}

export default MovieCard;
