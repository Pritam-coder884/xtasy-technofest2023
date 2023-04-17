import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    accessToken:""
}

export const customReducer = createReducer(
    initialState,{
        UpdateAccessToken: (state, action) => {state.accessToken = action.payload}
    }
)