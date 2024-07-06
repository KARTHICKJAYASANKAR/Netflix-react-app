import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

    const showGptSearch = useSelector(store=> store.gpt.showGptSearch);

    useNowPlayingMovies();     //custom hook
    usePopularMovies();      //custom hook called when browser loads..
    useTopRatedMovies();
    // useUpcomingMovies();


  return (
    <div>
        <Header/>
        {
            showGptSearch?(<GptSearch/>):(
                <>
                    <MainContainer/>
                    <SecondaryContainer/>
               </>
            )
           
        }
        
        {/*
            Main component
                - video bg
                - video title
            SecondaryContainer
                - movie list *n
                - cards*n    

         */}
    </div>
  )
}

export default Browse