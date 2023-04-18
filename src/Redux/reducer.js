import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    accessToken:"",
    eventList:{}
}

export const customReducer = createReducer(
    initialState,{
        UpdateAccessToken: (state, action) => {state.accessToken = action.payload},
        updateEventList: (state, action) => {state.eventList = action.payload}
    }
)