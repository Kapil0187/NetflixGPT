import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name:'details',
    initialState:{
        movieDetails:null
    },
    reducers:{
        addMovieDetails : (state,action)=>{
            state.movieDetails = action.payload;
        }
    }
})

export const {addMovieDetails} = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;