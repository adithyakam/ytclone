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
    closeSideMenu: (state) => {
      state.sidemenu = false;
    },
  },
});
export const { toggleSideMenu, closeSideMenu } = SideMenu.actions;
export default SideMenu.reducer;
