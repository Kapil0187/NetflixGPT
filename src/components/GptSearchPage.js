import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggetion from './GptMoviesSuggetion'
import { LOGINBG } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
        <img src={LOGINBG} alt='bgImage'></img>
      </div>
      <GptSearchBar/>
      <GptMoviesSuggetion/>
    </div>
  )
}

export default GptSearchPage
