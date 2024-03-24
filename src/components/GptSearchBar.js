import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'


const GptSearchBar = () => {
    const langkey = useSelector(store=>store.config.lang)
  return (
    <div className='pt-48 flex justify-center'>
      <form className='w-1/2 bg-black'>
        <input 
            className='p-4 m-4 w-9/12 rounded-lg'
            type='text'
            placeholder={lang[langkey].gptSearchPlaceholder}></input>
        <button className='py-4 px-4 w-28 bg-red-700 text-white rounded-lg'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
