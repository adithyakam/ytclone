const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  sidemenu: true,
};

const SideMenu = createSlice({
  name: "sidemenu",
  initialState,
  reducers: {
    toggleSideMenu: (state) => {
      state.sidemenu = !state.sidemenu;
    },
  },
});
export const { toggleSideMenu } = SideMenu.actions;
export default SideMenu.reducer;
