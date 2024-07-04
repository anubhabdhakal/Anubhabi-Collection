import { createSlice } from "@reduxjs/toolkit";

const currentuser = createSlice({
  name: "currentuser",
  initialState: {
    currentuser: {},
    isEmailVerificationModalOpen: false,
  },
  reducers: {
    setCurrentUser: (state, actions) => {
      state.currentuser = actions.payload;
    },
    toggleEmailVerificationModal: (state) => {
      state.isEmailVerificationModalOpen = !state.isEmailVerificationModalOpen;
    },
  },
});

export const { setCurrentUser, toggleEmailVerificationModal } =
  currentuser.actions;
export default currentuser.reducer;
