import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const walletSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("Incoming in wallet: ", action.payload);
      const isPresent = state.find((item) => item === action.payload);
      return isPresent === undefined ? [...state, action.payload] : state;
    },
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload),

    emptyCart: (state) => (state = initialState),
  },
});

export const { addToCart, removeFromCart, emptyCart } = walletSlice.actions;
export default walletSlice.reducer;
