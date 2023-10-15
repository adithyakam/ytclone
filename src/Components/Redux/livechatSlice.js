import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const livechatSlice = createSlice({
  name: "livechat",
  initialState,
  reducers: {
    addchat: (state, action) => {
      if (state.length > 100) state.splice(100, 1);
      state.push({
        name: action.payload.name,
        msg: action.payload.msg,
      });
    },
  },
});

export const { addchat } = livechatSlice.actions;
export default livechatSlice.reducer;
