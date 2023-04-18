import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    accessToken:"",
    eventList:[],
    isLoading : false,
    error : ""
}

// fetch all events
export const fetchAllEvents = createAsyncThunk("events/fetchAllEvents" , async ()=> {
    const {data} = await axios.get( "https://xtasy-backend.onrender.com/api/event/getAllEvents")
    return data.data
})

// fetch events for user


// register user for a event



const customSlice = createSlice({
    name : "custom",
    initialState,
    reducers : {
        updateAccessToken: (state, action) => {state.accessToken = action.payload},
        updateEventList: (state, action) => {state.eventList = action.payload}
    },
    extraReducers : (build) => {
        build.addCase(fetchAllEvents.fulfilled , (state,action)=> {
            state.eventList = action.payload
            state.isLoading = false
        })
        build.addCase(fetchAllEvents.pending , (state,action)=> {
            state.isLoading = true
        })
        build.addCase(fetchAllEvents.rejected , (state ,action) => {
            state.isLoading = false;
            state.error = action.payload
        })
    }
})

export const {updateAccessToken,updateEventList} = customSlice.actions

export default customSlice.reducer
