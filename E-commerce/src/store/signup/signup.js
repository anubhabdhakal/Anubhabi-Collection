import { createSlice } from "@reduxjs/toolkit";

const signup = createSlice({
  name: "signup",
  initialState: {
    formValues: {},
    code: null, ///email verification code
  },

  reducers: {
    setStoreFormValues: (state, actions) => {
      state.formValues = actions.payload;
    },
    setStoreVerificationCode: (state, actions) => {
      state.code = actions.payload;
    },
  },
});

export const { setStoreFormValues, setStoreVerificationCode } = signup.actions;

export default signup.reducer;
