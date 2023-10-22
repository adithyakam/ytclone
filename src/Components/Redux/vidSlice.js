import { createSlice } from "@reduxjs/toolkit";

const initialState = { key: "", vid: [] };

const vidSlice = createSlice({
  name: "vidSlice",
  initialState,
  reducers: {
    addVideos: (state, action) => {
      return { key: action.payload.key, vid: action.payload.vid };
    },
    addKey: (state, action) => {
      return {
        key: action.payload,
        vid: state.vid,
      };
    },
  },
});

export const { addVideos, addKey } = vidSlice.actions;
export default vidSlice.reducer;
