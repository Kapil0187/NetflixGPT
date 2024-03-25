import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggetion from './GptMoviesSuggetion'
import { LOGINBG } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
    <div className='fixed -z-10'>
        <img className="h-screen object-cover md:h-auto"src={LOGINBG} alt='bgImage'></img>
    </div>
    <div className=''>
      <GptSearchBar/>
      <GptMoviesSuggetion/>
    </div>
    </div>
  )
}

export default GptSearchPage
