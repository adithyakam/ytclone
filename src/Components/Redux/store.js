import { configureStore } from "@reduxjs/toolkit";
import sideMednuSlice from "./sideMednuSlice";
import searchSlice from "./searchSlice";
import livechatSlice from "./livechatSlice";
import categorySlice from "./categorySlice";
import vidSlice from "./vidSlice";
import searchCatSlice from "./searchCatSlice";

const store = configureStore({
  reducer: {
    sidemenu: sideMednuSlice,
    search: searchSlice,
    livechat: livechatSlice,
    category: categorySlice,
    vid: vidSlice,
    catSearch: searchCatSlice,
  },
});

export default store;
