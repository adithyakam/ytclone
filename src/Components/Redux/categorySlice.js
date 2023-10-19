import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCat: (state, action) => {
      return action.payload;
    },
  },
});

export const { addCat } = categorySlice.actions;
export default categorySlice.reducer;
