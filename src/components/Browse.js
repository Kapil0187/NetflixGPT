import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'

const Browes = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
      
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
