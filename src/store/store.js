import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
const store = configureStore({
    reducer: {
        // your reducers go here
        auth : authSlice,
    }
})

export default store;