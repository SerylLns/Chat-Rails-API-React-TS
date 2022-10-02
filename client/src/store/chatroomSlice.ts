import { createSlice, EmptyObject } from "@reduxjs/toolkit";

export type messageType = {
  content: String;
  created_at: String;
  user_id: Number;
};

export type chatroomType = {
  id: Number;
  name: String;
  messages: [messageType];
};

type chatroomsType = {
  chatrooms: [] | [chatroomType];
  currentChatroom?: null | chatroomType;
  active: Boolean;
};

const initialState: chatroomsType = {
  chatrooms: [],
  currentChatroom: null,
  active: false,
};

export const chatroomSlice = createSlice({
  name: "chatrooms",
  initialState,
  reducers: {
    setChatrooms: (state, action) => {
      return (state = { ...state, chatrooms: action.payload });
    },
    setCurrentChatroom: (state, action) => {
      return (state = {
        ...state,
        currentChatroom: action.payload,
        active: true,
      });
    },
  },
});

export const { setChatrooms, setCurrentChatroom } = chatroomSlice.actions;
export default chatroomSlice.reducer;
