import { configureStore } from "@reduxjs/toolkit";
import sideMednuSlice from "./sideMednuSlice";
import searchSlice from "./searchSlice";
import livechatSlice from "./livechatSlice";
import categorySlice from "./categorySlice";
import vidSlice from "./vidSlice";

const store = configureStore({
  reducer: {
    sidemenu: sideMednuSlice,
    search: searchSlice,
    livechat: livechatSlice,
    category: categorySlice,
    vid: vidSlice,
  },
});

export default store;
