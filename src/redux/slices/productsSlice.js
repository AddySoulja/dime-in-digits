import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    storeProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { storeProducts } = productsSlice.actions;
export default productsSlice.reducer;
