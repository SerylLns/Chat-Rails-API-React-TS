import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCurrentChatroom } from "./api/chatroomRequest";
import { ChatContainer, ChatTitle } from "./ChatStyle";
import Message from "./components/message/Message";
import MessageForm from "./components/message/MessageForm";
import { setCurrentChatroom } from "./store/chatroomSlice";
import { useAppDispatch, useAppSelector } from "./store/hooks";

const Chat = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { currentChatroom } = useAppSelector((state) => state.chatrooms);
  const { id: userId } = useAppSelector((state) => state.user);

  const mutation = useMutation(getCurrentChatroom, {
    onSuccess: async (data) => {
      dispatch(setCurrentChatroom(data.chatroom));
    },
  });

  useEffect(() => {
    mutation.mutate(id);
  }, [id]);

  return (
    <ChatContainer>
      <ChatTitle>{currentChatroom?.name}</ChatTitle>
      {currentChatroom?.messages.map((message, index) => {
        return (
          <Message
            isOwner={userId === message.user_id}
            key={index}
            message={message}
          />
        );
      })}
      <MessageForm />
    </ChatContainer>
  );
};

export default Chat;
