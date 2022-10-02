import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import chatroomsReducer from "./chatroomSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    chatrooms: chatroomsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
