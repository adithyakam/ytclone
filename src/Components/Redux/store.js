import { configureStore } from "@reduxjs/toolkit";
import sideMednuSlice from "./sideMednuSlice";
import searchSlice from "./searchSlice";
import livechatSlice from "./livechatSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    sidemenu: sideMednuSlice,
    search: searchSlice,
    livechat: livechatSlice,
    category: categorySlice,
  },
});

export default store;
