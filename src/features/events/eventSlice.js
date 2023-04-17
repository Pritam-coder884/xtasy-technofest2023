import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getEventDetailsFormFireStore } from "../../utils/firbase/firebase.utils";

const INITAL_STATE = {
  eventsMap: [],
  isLoading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await getEventDetailsFormFireStore();
  console.log(response);
  return response;
});

const eventSlice = createSlice({
  name: "event",
  initialState: INITAL_STATE,
  reducers: {
    SET_EVENT_MAP: (state, action) => {
      state.eventsMap = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(fetchEvents.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(fetchEvents.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    build.addCase(fetchEvents.fulfilled, (state, action) => {
      state.isLoading = false;
      state.categoriesMap = action.payload;
    });
  },
});

export const eventActions = eventSlice.actions;
export default eventSlice.reducer;
