import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        moviesList:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addMoviesList:(state , action)=>{
            state.moviesList = action.payload;
        },
    },
});


export const { toggleGptSearchView , addMoviesList } = gptSlice.actions;
export default gptSlice.reducer;

