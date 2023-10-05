import { configureStore } from "@reduxjs/toolkit";
import sideMednuSlice from "./sideMednuSlice";

const store = configureStore({
  reducer: {
    sidemenu: sideMednuSlice,
  },
});

export default store;
