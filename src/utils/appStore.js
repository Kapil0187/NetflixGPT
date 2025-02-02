import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import backGroudVideoSlice from "./backGroudVideoSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";
import movieDetailsSlice from "./movieDetailsSlice";
import showTrailerSlice from "./showTrailerSlice";


const appStore = configureStore({
    reducer:{
        user:userReducer,
        bg:backGroudVideoSlice,
        movies:moviesReducer,
        gpt:gptSlice,
        config:configSlice,
        details:movieDetailsSlice,
        show:showTrailerSlice,
    },
});

export default appStore;