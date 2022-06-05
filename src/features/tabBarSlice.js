import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  visible: true,
};

const tabBarSlice = createSlice({
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

export const { openTabBar, closeTabBar } = tabBarSlice.actions;
export default tabBarSlice.reducer;
