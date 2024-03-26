import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useMovieDetails from '../Hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL,NOT_FOUND_CDN_URL } from '../utils/constants';

const MovieDetails = () => {

    const [searchParams] = useSearchParams();
    const movieId = searchParams.get("id");
    useMovieDetails(movieId);
    const movie = useSelector((store)=>store.details.movieDetails);
    if(movie===null)
        return;
    const {tagline,overview,original_title,poster_path,release_date,runtime} = movie;
    const {genres,status} = movie;
    console.log(movie);
  return (
    <div className='fixed absolute bg-blue-900 w-full h-auto'>
      <div className='mt-36 m-16 flex '>
        <div className='w-5/12'>
            <img 
                className='rounded-3xl w-80'
                alt='Poster' 
                src={poster_path?IMG_CDN_URL+poster_path:NOT_FOUND_CDN_URL}>
            </img>
        </div>
        <div className='text-white mx-12 w-full'>
            <h1 className='font-bold text-4xl'>{original_title}</h1>
            <h1 className='text-2xl opacity-50'>{tagline}</h1>
            <ul className='flex'>
                {genres.map((g)=><li className='mr-4 px-2 my-4 text-sm rounded-lg bg-rose-500' key={g.id}>{g.name}</li>)}
            </ul>
            <h1 className='text-xl my-4 font-bold'>Overview</h1>
            <p>{overview}</p>
            <div className='mt-4 border-b border-opacity-90 pb-3'>
                <span className='font-bold text-lg'>Status : </span>
                <span className='opacity-50 text-lg'>{status}</span>
            </div>
            <div className='mt-4 border-b border-opacity-90 pb-3'>
                <span className='font-bold text-lg'>Runtime : </span>
                <span className='opacity-50 text-lg'>{runtime} min</span>
            </div>
            <div className='mt-4 border-b border-opacity-90 pb-3'>
                <span className='font-bold text-lg'>Release Date : </span>
                <span className='opacity-50 text-lg'>{release_date}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
