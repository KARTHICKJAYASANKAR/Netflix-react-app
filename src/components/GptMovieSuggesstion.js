import React, { useEffect } from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
function GptMovieSuggesstion() {

    const lists = useSelector(store=> store.gpt.moviesList);

    useEffect(()=>{
        console.log("From moviesuggestion : ")
        console.log(lists)
        console.log(lists.results);
    },[])

  return (
    <div className='bg-black'>

         


      { lists ?<MovieList title={"Similar movies"} movies={lists.results}/> : (<></>)}

      
       
    </div>
  )
}

export default GptMovieSuggesstion