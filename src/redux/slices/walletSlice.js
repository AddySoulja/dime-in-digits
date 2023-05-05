import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const walletSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isPresent = state.find((item) => item.id === action.payload.id);
      if (isPresent === undefined) {
        state = [...state, { ...action.payload }];
      } else {
        const newArr = state.filter((item) => item.id !== action.payload.id);
        const obj = { ...isPresent, qty: { ...isPresent }.qty + 1 };
        state = [...newArr, { ...obj }];
      }
      return state;
    },
    removeFromCart: (state, action) =>
      state.filter((item) => item.id !== action.payload),

    emptyCart: (state) => (state = initialState),
  },
});

export const { addToCart, removeFromCart, emptyCart } = walletSlice.actions;
export default walletSlice.reducer;
