import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import userAuthSlice from "./slices/userAuth";
import walletSlice from "./slices/walletSlice";

const store = configureStore({
  reducer: {
    user: userAuthSlice,
    products: productsSlice,
    wallet: walletSlice,
  },
});

export default store;
