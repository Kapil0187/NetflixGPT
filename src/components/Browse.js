import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import GptSearch from './GptSearchPage'
import { useSelector } from 'react-redux'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Browes = () => {

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default Browes
