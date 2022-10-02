import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import chatroomsReducer from "./chatroomSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const reducers = combineReducers({
  user: userReducer,
  chatrooms: chatroomsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
