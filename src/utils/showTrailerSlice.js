import { CreateSliceOptionss, createSlice } from "@reduxjs/toolkit";

const showTrialerSlcie = createSlice({
    name:"show",
    initialState:{
        showTrialr : false,
        trialerVideo : null,
    },
    reducers:{
        ToggelShowTrailer:(state)=>{
            state.showTrialr = !state.showTrialr;
        },
        addTrialervideo:(state,action)=>{
            state.trialerVideo = action.payload;
        }
    }
})

export const {ToggelShowTrailer,addTrialervideo} = showTrialerSlcie.actions;
export default showTrialerSlcie.reducer;