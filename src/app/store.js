import { configureStore } from '@reduxjs/toolkit';

import basketReducer from '~features/BasketSlice';
import tabBarReducer from '~features/TabBarSlice';

const store = configureStore({
  reducer: {
    tabBar: tabBarReducer,
    basket: basketReducer,
  },
});

export default store;
