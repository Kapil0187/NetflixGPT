import React from 'react'
import { useSearchParams } from 'react-router-dom';
import useMovieDetails from '../Hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL,NOT_FOUND_CDN_URL } from '../utils/constants';
import Footer from './Footer';

const MovieDetailsPage = () => {
    const [searchParams] = useSearchParams();
    const movieId = searchParams.get("id");
    useMovieDetails(movieId);
     const details = useSelector((store)=>store.details.movieDetails);
     const {poster_path,original_title,overview,tagline,genres} = details;
    
  return (
    <div className='absolute w-full h-auto bg-blue-900 '>
      <div className='mt-32 ml-16 flex'>
        <div>
          <img
            className='w-11/12 rounded-3xl'
            alt='Poster' 
            src={poster_path?IMG_CDN_URL+""+poster_path:NOT_FOUND_CDN_URL}>
          </img>
        </div>
        <div className='text-white w-full mr-16'>
            <h1 className='text-4xl font-bold'>{original_title}</h1>
            <p className='text-2xl opacity-50'>{tagline}</p>
            {genres.map((g)=><p>{genres.name}</p>)}
            <h1 className='my-4 text-2xl'>Overview</h1>
            <p className='text-lg'>{overview}</p>
        </div>
      </div>
    </div>
  )
}

export default MovieDetailsPage
