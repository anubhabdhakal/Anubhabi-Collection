import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    cartLists: [],
    numberOfCarts: 0,
  },
  reducers: {
    setNumberOfcarts: (state, action) => {
      state.numberOfCarts = action.payload;
    },
    setAllCartLists: (state, action) => {
      state.cartLists = action.payload;
    },
  },
});

export const { setNumberOfcarts, setAllCartLists } = cart.actions;
export default cart.reducer;
