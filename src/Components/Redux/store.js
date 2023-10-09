import { configureStore } from "@reduxjs/toolkit";
import sideMednuSlice from "./sideMednuSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sidemenu: sideMednuSlice,
    search: searchSlice,
  },
});

export default store;
