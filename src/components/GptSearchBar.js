import React from 'react'
import lang from '../utils/languageConstant'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMoviesResult } from '../utils/gptSlice'
import { useDispatch } from 'react-redux'

const GptSearchBar = () => {
    const langkey = useSelector(store=>store.config.lang);
    const dispatch = useDispatch();

    const searchText = useRef(null);
    const handlGptSearchClik = async ()=>{
        const movie = searchText.current.value;
        // Make an api call to gpt api and get movie results

        // const gptQuery = "Act as a Movie Recomendation System and suggest some movies for the query"+" "+searchText.current.value +". only give me names of 5 movies, comma seperated like the example result given ahead : Example Result: Gadar,Don,Sholay,Ek tha tiger,Koi mil gaya";
        // const gptResults = await openai.chat.completions.create({
        //   messages: [{ role: 'user', content: gptQuery }],
        //   model: 'gpt-3.5-turbo',
        // });
        // console.log(gptResults.choices);
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
        const json = await data.json();
        dispatch(addGptMoviesResult(json.results));
      }
  return (
    <div className='pt-48 flex justify-center'>
      <form onSubmit={(e)=>e.preventDefault()} className='w-full md:w-1/2 bg-black'>
        <input 
            ref={searchText}
            className='p-4 m-4 w-7/12 md:w-9/12 rounded-lg'
            type='text'
            placeholder={lang[langkey].gptSearchPlaceholder}></input>
        <button className='py-4 px-4 w-28 bg-red-700 text-white rounded-lg'
        onClick={handlGptSearchClik}>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
