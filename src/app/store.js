import { configureStore } from '@reduxjs/toolkit';
import tabBarReducer from 'features/TabBarSlice';
import basketReducer from 'features/BasketSlice';

const store = configureStore({
  reducer: {
    tabBar: tabBarReducer,
    basket: basketReducer,
  },
});

export default store;
