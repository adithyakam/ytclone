import { configureStore } from "@reduxjs/toolkit";
import sideMednuSlice from "./sideMednuSlice";
import searchSlice from "./searchSlice";
import livechatSlice from "./livechatSlice";

const store = configureStore({
  reducer: {
    sidemenu: sideMednuSlice,
    search: searchSlice,
    livechat: livechatSlice,
  },
});

export default store;
