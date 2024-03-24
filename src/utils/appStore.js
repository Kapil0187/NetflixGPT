import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import backGroudVideoSlice from "./backGroudVideoSlice";

const appStore = configureStore({
    reducer:{
        user:userReducer,
        bg:backGroudVideoSlice,
        movies:moviesReducer,
    },
});

export default appStore;