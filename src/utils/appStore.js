import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import backGroudVideoSlice from "./backGroudVideoSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        bg:backGroudVideoSlice,
        movies:moviesReducer,
        gpt:gptSlice,
        config:configSlice,
    },
});

export default appStore;