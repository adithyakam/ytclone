import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const searchslice = createSlice({
  name: "search",
  initialState,
  reducers: {
    cacheResults: (state, action) => {
      state = {
        ...action.payload,
        ...state,
      };
    },
  },
});

export const { cacheResults } = searchslice.actions;
export default searchslice.reducer;
