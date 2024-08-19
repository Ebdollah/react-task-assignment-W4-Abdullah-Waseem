import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "./slices/app/searchSlice";
import recentSlice from "./slices/app/recentSlice";
import { weatherApi } from "./slices/features/weatherApi";


const store = configureStore({
    reducer : {
        search : searchSlice,
        recent : recentSlice,
        [weatherApi.reducerPath] : weatherApi.reducer
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(weatherApi.middleware)
})

export default store;