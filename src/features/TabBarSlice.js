import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: true,
};

const TabBarSlice = createSlice({
  name: 'tabBar',
  initialState,
  reducers: {
    openTabBar: (state) => {
      if (!state.visible) state.visible = true;
    },
    closeTabBar: (state) => {
      if (state.visible) state.visible = false;
    },
  },
});

export const selectTabBar = (state) => state.tabBar;

export const { openTabBar, closeTabBar } = TabBarSlice.actions;
export default TabBarSlice.reducer;
