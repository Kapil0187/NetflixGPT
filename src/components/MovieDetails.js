import React from 'react'
import { useSearchParams } from 'react-router-dom'
import useMovieDetails from '../Hooks/useMovieDetails';
import { useSelector } from 'react-redux';
import { IMG_CDN_URL,NOT_FOUND_CDN_URL } from '../utils/constants';
import useMovieRecommendations from '../Hooks/useMovieRecommendations';
import CircularProgress from './CirculRating';
import TrailerModel from './TrailerModel';
import { useDispatch } from 'react-redux';
import { ToggelShowTrailer } from '../utils/showTrailerSlice';

const MovieDetails = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const movieId = searchParams.get("id");
    useMovieDetails(movieId);

    const movie = useSelector((store)=>store.details.movieDetails);
    const showTrialer = useSelector((store)=>store.show.showTrialr);
    if(movie===null)
        return;
    const {tagline,overview,original_title,poster_path,release_date,runtime,vote_average,id} = movie;
    const {genres,status} = movie;
    
    const handleShowTrailer = ()=>{
        dispatch(ToggelShowTrailer());
    }

  return (
    <div className=' bg-blue-900 w-full h-auto'>
      <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-5/12 pt-48 md:pt-24 pl-12'>
            <img 
                className='rounded-3xl w-80'
                alt='Poster' 
                src={poster_path?IMG_CDN_URL+poster_path:NOT_FOUND_CDN_URL}>
            </img>
        </div>
        <div className='text-white my-6 md:my-0 md:mx-12 w-full p-16 md:pt-24'>
            <h1 className='font-bold text-4xl'>{original_title}</h1>
            <h1 className='text-2xl opacity-50'>{tagline}</h1>
            <ul className='flex flex-wrap'>
                {genres.map((g)=><li className='mr-4 px-2 my-4 text-sm rounded-lg bg-rose-500' key={g.id}>{g.name}</li>)}
            </ul>
            <div className='flex items-center'>
                <CircularProgress rating={vote_average.toFixed(1)}/>
                <h1 onClick={handleShowTrailer} className="mx-8 font-bold text-2xl cursor-pointer hover:text-red-400">Watch Trailer</h1>
                {showTrialer && <TrailerModel movieId={id}/>}
            </div>
            <h1 className='text-xl my-4 font-bold'>Overview</h1>
            <p>{overview}</p>
            <div className='mt-4 border-b border-opacity-90 pb-3'>
                <span className='font-bold text-lg'>Status : </span>
                <span className='text-gray-500 font-bold text-lg'>{status}</span>
            </div>
            <div className='mt-4 border-b border-opacity-90 pb-3'>
                <span className='font-bold text-lg'>Runtime : </span>
                <span className='text-gray-500 font-bold text-lg'>{runtime} min</span>
            </div>
            <div className='mt-4 border-b border-opacity-90 pb-3'>
                <span className='font-bold text-lg'>Release Date : </span>
                <span className='text-gray-500 font-bold text-lg'>{release_date}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
