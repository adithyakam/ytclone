import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const vidSlice = createSlice({
  name: "vidSlice",
  initialState,
  reducers: {
    addVideos: (state, action) => {
      const { key, vid } = action.payload;

      state[key] = vid;
    },
  },
});

export const { addVideos } = vidSlice.actions;
export default vidSlice.reducer;
