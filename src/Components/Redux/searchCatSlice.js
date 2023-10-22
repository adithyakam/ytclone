const { createSlice } = require("@reduxjs/toolkit");

const initialState = "";

const searchCatSlice = createSlice({
  name: "searchCat",
  initialState,
  reducers: {
    addcatSearch: (state, action) => {
      return action.payload;
    },
  },
});
export const { addcatSearch } = searchCatSlice.actions;
export default searchCatSlice.reducer;
