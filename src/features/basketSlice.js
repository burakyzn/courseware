import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let item = state.items.filter((item) => action.payload.id === item.id)[0];

      if (!item) {
        state.items = [...state.items, action.payload];
        state.totalPrice += action.payload.price;
      }
    },
    removeFromBasket: (state, action) => {
      let item = state.items.filter((item) => action.payload.id === item.id)[0];

      if (item) {
        const index = state.items.indexOf(item);
        state.items.splice(index, 1);
        state.totalPrice -= item.price;
      }
    },
    cleanBasket: (state, action) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const itemsSelector = (state) => state.basket.items;
export const totalPriceSelector = (state) => state.basket.totalPrice;

export const { addToBasket, removeFromBasket, cleanBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
