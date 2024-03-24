import { createSlice } from "@reduxjs/toolkit";

const backGroudVideoSlice = createSlice({
    name:"bg",
    initialState:{
        trailerVideo:null
    },
    reducers:{
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        }
    }
})

export const {addTrailerVideo} = backGroudVideoSlice.actions;
export default backGroudVideoSlice.reducer;