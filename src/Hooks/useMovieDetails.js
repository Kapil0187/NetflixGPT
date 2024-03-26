import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieDetails } from '../utils/movieDetailsSlice';
import { useSelector } from 'react-redux';

const useMovieDetails = () => {

    const dispatch = useDispatch();
    const movieDetails = useSelector((store)=>store.details.movieDetails)
    const getMovieDetails = async (movieId)=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/634492?language=en-US",API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addMovieDetails(json));
    }
  useEffect(()=>{
    !movieDetails && getMovieDetails();
  },[])
}

export default useMovieDetails
