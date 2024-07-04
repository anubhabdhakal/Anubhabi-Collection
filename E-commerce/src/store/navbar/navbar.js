import { createSlice } from "@reduxjs/toolkit";

const navbar = createSlice({
  name: "navbar",
  initialState: {
    isMenuModalOpen: false,
    isSearchModalOpen: false,
    isSignupModalOpen: false,
  },
  reducers: {
    toggleMenuModal: (state) => {
      state.isMenuModalOpen = !state.isMenuModalOpen;
    },
    toggleSearchModal: (state) => {
      state.isSearchModalOpen = !state.isSearchModalOpen;
    },
    toggleSignupModal: (state, actions) => {
      state.isSignupModalOpen = actions.payload;
    },
  },
});

export const { toggleMenuModal, toggleSearchModal, toggleSignupModal } =
  navbar.actions;
export default navbar.reducer;
