import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        topRatedMovies:null,
        popularMovies:null,
        upcomingMovies:null,
        movieRecommendations:null,
        expoloreMovies:[],
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload;
        },
        addMovieRecommendations:(state,action)=>{
            state.movieRecommendations = action.payload;
        },
        addExploreMovies:(state,action)=>{
            state.expoloreMovies = [...state.expoloreMovies,...action.payload];
        }
    }
})

export const {addNowPlayingMovies,addTopRatedMovies,addPopularMovies,addUpcomingMovies,addMovieRecommendations,addExploreMovies} = movieSlice.actions;
export default movieSlice.reducer;