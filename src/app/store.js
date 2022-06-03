import { configureStore } from '@reduxjs/toolkit';

import basketReducer from '~features/BasketSlice';
import tabBarReducer from '~features/TabBarSlice';
import authReducer from '~features/AuthSlice';
import categoryReducer from '~features/CategorySlice';

const store = configureStore({
  reducer: {
    tabBar: tabBarReducer,
    basket: basketReducer,
    auth: authReducer,
    category : categoryReducer
  },
});

export default store;
