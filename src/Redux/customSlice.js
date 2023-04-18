import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    accessToken:"",
    eventList:[],
    userEventList:[],
    isLoading : false,
    isProfileLoading : false,
    error : ""
}

// fetch all events
export const fetchAllEvents = createAsyncThunk("events/fetchAllEvents" , async ()=> {
    const {data} = await axios.get( "https://xtasy-backend.onrender.com/api/event/getAllEvents")
    return data.data
})

// fetch events for user
export const fetchUserEvents = createAsyncThunk("events/fetchUserEvents", async(name, thunkAPI) => {
    console.log(thunkAPI);
    const state = thunkAPI.getState();
    const {data} = await axios.get("https://xtasy-backend.onrender.com/api/user/details",{
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : state.custom.accessToken
        },
      })
      return data.data
})

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
        build.addCase(fetchUserEvents.fulfilled, (state,action) => {
            state.userEventList=action.payload
            state.isProfileLoading=false
        })
        build.addCase(fetchUserEvents.pending, (state,action) => {
            state.isProfileLoading=true
        })
        build.addCase(fetchUserEvents.rejected, (state,action) => {
            state.isProfileLoading=false
            state.error = action.payload
        })
    }
})

export const {updateAccessToken,updateEventList} = customSlice.actions

export default customSlice.reducer
