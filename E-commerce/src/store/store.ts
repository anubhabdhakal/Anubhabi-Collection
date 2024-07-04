import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "./navbar/navbar";
import cartReducer from "./cart/cart";
import homeReducer from "./home/home";
import productsReducer from "./products/products";
import signupReducer from "./signup/signup";
import currentUserReducer from "./user/user";
import faqsReducer from "./faqs/faqs";
const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    cart: cartReducer,
    home: homeReducer,
    products: productsReducer,
    currentUser: currentUserReducer,
    signup: signupReducer,
    faqs: faqsReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
