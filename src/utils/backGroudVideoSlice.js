import { createSlice } from "@reduxjs/toolkit";

const backGroudVideoSlice = createSlice({
    name:"bg",
    initialState:{
        trailerVideo:null,
        showTrialer:false,
    },
    reducers:{
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        ToggleShowTrailer:(state)=>{
            state.showTrialer = !state.showTrialer;
        }
    }
})

export const {addTrailerVideo,ToggleShowTrailer} = backGroudVideoSlice.actions;
export default backGroudVideoSlice.reducer;