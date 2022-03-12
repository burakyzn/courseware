import { configureStore } from "@reduxjs/toolkit";
import tabBarReducer from "../features/tabBarSlice";

const store = configureStore({
  reducer: {
    tabBar: tabBarReducer,
  },
});

export default store;
