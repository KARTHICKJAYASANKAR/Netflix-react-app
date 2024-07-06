import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS, GEMINI_API_KEY } from '../utils/constants';
import axios from 'axios';
import GptMovieSuggesstion from './GptMovieSuggesstion';
import { addMoviesList } from '../utils/gptslice';

function GptSearchBar() {

    const dispatch = useDispatch();
    const language = useSelector(store=> store.config.lang)
    const testingList = useSelector(store=> store.gpt.moviesList)
    const searchText = useRef(null);
    const [searchResults , setSearchresults] = useState(false);
    const [movielist , setMovielist] = useState([]);

    // const handleClickSearch=async(e)=>{
    //     e.preventDefault();
    //     setSearchresults(true);
    //    //console.log(searchText.current.value);
    //    const options = {
    //     method: 'GET',
    //     url: 'https://api.themoviedb.org/3/search/movie',
    //     headers: {
    //       accept: 'application/json',
    //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGI4MzllMTc1NWRiN2IyOGMwZmRjMDBmNDhiNjQ4MiIsInN1YiI6IjY2MDNiNmE0MWIxZjNjMDE2MzlhNWJiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.87VrveRJjRgxENdDl8AABZdj11Tu-z_FgTkjTrI8jTI'
    //     }
    //   };
      
    //   axios
    //     .request(options)
    //     .then(function (response) {
          
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });


    // }


    const HandleClickSearch = async (e) => {
        e.preventDefault();
        setSearchresults(true)
        const data = await fetch(
          "https://api.themoviedb.org/3/search/movie?query=" +
          searchText.current.value+
            "&include_adult=false&language=en-US&page=1",
          API_OPTIONS
        );
        if(data){
            setSearchresults(false)
        }
        const json = await data.json();
        setMovielist(json);
        dispatch(addMoviesList(json));
      };



  return (
    <div className='pt-[10%] flex justify-center p-12'>

        <form className='w-1/2 bg-black grid grid-cols-12 rounded-md'>
            <input ref={searchText}
            type='text' 
            className='p-4 m-4 col-span-9'
            placeholder={lang[language].gptSearchPlaceholder}
            />
            <button className='col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg' onClick={HandleClickSearch}>{lang[language].search}</button>
        </form>
        {searchResults?(<h1 className='text-white font-bold absolute '>Loading...</h1>):(<></>)}
        
        

    </div>
  )
}

export default GptSearchBar