import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
    const movies = useSelector(store=> store.movies);
    console.log(movies);
  return (
    <div className='bg-black'>

        <div className='-mt-20 relative z-20 pl-10'> 

        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>


        </div>
       
    </div>
  )
}

export default SecondaryContainer