import { configureStore } from '@reduxjs/toolkit';

import basketReducer from '~features/basketSlice';
import tabBarReducer from '~features/tabBarSlice';
import authReducer from '~features/authSlice';
import categoryReducer from '~features/categorySlice';

const store = configureStore({
  reducer: {
    tabBar: tabBarReducer,
    basket: basketReducer,
    auth: authReducer,
    category : categoryReducer
  },
});

export default store;
