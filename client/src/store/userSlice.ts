import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isConnected: false,
  token: "",
  username: null,
  id: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      return (state = { ...payload, isConnected: true });
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
