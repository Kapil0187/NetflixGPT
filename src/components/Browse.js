import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import GptSearch from './GptSearchPage'
import { useSelector } from 'react-redux'

const Browes = () => {

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header/>
      {showGptSearch ?
        (<GptSearch/>):
        (
        <>
          <MainContainer/>
          <SecondryContainer/>
        </>)}
      
      {/* 
          MainContainer
            - videoBackgroud
            - vidotitle
          Secondrycontainer
            - MovieList*n
              - cards*n
      */}
    </div>
  )
}

export default Browes
