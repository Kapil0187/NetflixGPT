import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieRecommendations } from '../utils/moviesSlice';

const useMovieRecommendations = (movieId) => {

  const dispatch = useDispatch();
  const getMovieRecommendations = async ()=>{
    const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/recommendations",API_OPTIONS);
    const json = await data.json();
    dispatch(addMovieRecommendations(json.results));
  }
  useEffect(()=>{
    getMovieRecommendations();
  },[]);
}

export default useMovieRecommendations
