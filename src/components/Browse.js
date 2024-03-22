import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'

const Browes = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      {/* 
          MainContainer
            - videoBackgroud
            - vidotitle
          Secondrycontainer
            - MovieList * n
              - cards * n
      */}
    </div>
  )
}

export default Browes
