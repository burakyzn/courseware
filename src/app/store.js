import { configureStore } from "@reduxjs/toolkit";
import tabBarReducer from "features/tabBarSlice";
import basketReducer from "features/basketSlice";

const store = configureStore({
  reducer: {
    tabBar: tabBarReducer,
    basket: basketReducer,
  },
});

export default store;
