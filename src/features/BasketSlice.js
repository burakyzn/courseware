import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const currentItem = state.items.find((item) => item.id === action.payload.id);

      if (!currentItem) {
        state.items = [...state.items, action.payload];
        state.totalPrice += action.payload.price;
      }
    },
    removeFromBasket: (state, action) => {
      const currentItem = state.items.find((item) => item.id === action.payload);

      if (currentItem) {
        const index = state.items.indexOf(currentItem);
        state.items.splice(index, 1);
        state.totalPrice -= currentItem.price;
      }
    },
    cleanBasket: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const itemsSelector = (state) => state.basket.items;
export const totalPriceSelector = (state) => state.basket.totalPrice;

export const { addToBasket, removeFromBasket, cleanBasket } = BasketSlice.actions;
export default BasketSlice.reducer;
