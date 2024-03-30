import React from 'react'
import useMovieTrailer from '../Hooks/useMovieTrailer'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ToggelShowTrailer } from '../utils/showTrailerSlice';

const TrailerModel = ({movieId}) => {
  
    const dispatch = useDispatch();
    useMovieTrailer(movieId);
    const trailerVideo = useSelector((store)=>store.bg?.trailerVideo)
    
    const handleCloseTrailer = ()=>{
        dispatch(ToggelShowTrailer());
    }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className='flex flex-col w-10/12 md:w-1/2 gap-2'>
            <button className='place-self-end' onClick={handleCloseTrailer}>Close</button>
            <div className='rounded-xl'>
                <iframe
                    className="w-full aspect-video"
                    src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1"} 
                    title="YouTube video player" 
                    allow="accelerometer;
                    autoplay;
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture;
                    web-share"
                    referrerpolicy="strict-origin-when-cross-origin" 
                ></iframe>
            </div>
        </div>
    </div>
  )
}

export default TrailerModel
