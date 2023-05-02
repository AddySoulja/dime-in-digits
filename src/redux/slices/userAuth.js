import { createSlice } from "@reduxjs/toolkit";

const initialState = { username: null, email: null, portfolio: [] };

const userAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logInUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
    },
    logOutUser: (state) => (state = initialState),
  },
});

export const { logInUser, logOutUser } = userAuthSlice.actions;
export default userAuthSlice.reducer;
