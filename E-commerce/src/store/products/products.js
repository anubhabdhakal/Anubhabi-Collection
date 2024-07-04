import { createSlice } from "@reduxjs/toolkit";

const products = createSlice({
  name: "products",
  initialState: {
    isSingleProductModalOpen: false,
    categoryLists: [],
    allProductsList: [],
  },
  reducers: {
    toggleSingleProductModal: (state) => {
      state.isSingleProductModalOpen = !state.isSingleProductModalOpen;
    },
    setCategoryLists: (state, actions) => {
      state.categoryLists = actions.payload;
    },
    setAllProductsList: (state, actions) => {
      state.allProductsList = actions.payload;
    },
  },
});

export const {
  toggleSingleProductModal,
  setCategoryLists,
  setAllProductsList,
} = products.actions;
export default products.reducer;
