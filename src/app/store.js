import { configureStore } from '@reduxjs/toolkit';

import basketReducer from '~features/BasketSlice';
import tabBarReducer from '~features/TabBarSlice';
import authReducer from '~features/AuthSlice';

const store = configureStore({
  reducer: {
    tabBar: tabBarReducer,
    basket: basketReducer,
    auth: authReducer
  },
});

export default store;
