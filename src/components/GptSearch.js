import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesstion from './GptMovieSuggesstion'
import { BG_PIC } from '../utils/constants'
import { useSelector } from 'react-redux';

function GptSearch() {
    const lists = useSelector(store=> store.gpt.moviesList);
  return (
    <div>
        
        <div className='absolute -z-10'>
            <img className='filter brightness-50' src={BG_PIC} alt="bg-image"/>
        </div>

        <GptSearchBar/>
       { lists?<GptMovieSuggesstion/>:(<></>)}

    </div>
  )
}

export default GptSearch