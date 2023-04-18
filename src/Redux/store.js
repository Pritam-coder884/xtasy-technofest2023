import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./customSlice";

const store = configureStore({
    reducer:{
        custom: customReducer
    }
})

export default store;