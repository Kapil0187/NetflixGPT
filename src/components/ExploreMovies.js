import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addExploreMovies } from '../utils/moviesSlice';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

const ExploreMovies = () => {

    const dispatch = useDispatch();
    
    const [page,setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const getMovies = async ()=>{
        setLoading(true);
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?languge=en-US&page='+page,API_OPTIONS);
        const json = await data.json();
        setLoading(false);
        if(json.results.length===0)
            setHasMore(false);
        dispatch(addExploreMovies(json.results));
        setPage(page+1);
    }
    const movies = useSelector((store)=>store.movies.expoloreMovies)
    

    useEffect(()=>{
        getMovies();
    },[]);

    if(movies===null)
        return;
  return (
    <div className='w-full h-full bg-blue-900'>
      <div className='pl-8 pt-48 md:p-12 md:pt-28'>
        <h1 className='text-white font-bold text-3xl'>Explore Movies</h1>
        <InfiniteScroll
          dataLength={movies.length}
          next={getMovies}
          hasMore={hasMore}
          loader={<p>Loading...</p>}
        >
            <div className='flex flex-wrap p-0 md:p-5'>
            {
                movies.map((movie)=>
                <div className='p-3'>
                    <MovieCard movie={movie}/>
                </div>
                )
            }
        </div>
        </InfiniteScroll>
        {loading && <h3>Loading........</h3>}
      </div>
    </div>
  )
}

export default ExploreMovies
