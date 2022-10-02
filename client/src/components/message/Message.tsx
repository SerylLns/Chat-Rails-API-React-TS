import React from "react";
import { messageType } from "../../store/chatroomSlice";
import {
  Divider,
  MessageAvatar,
  MessageBox,
  MessageHeader,
  MessageHeaderUser,
  MessageText,
  MessageTime,
} from "./MessageStyle";

const Message: React.FC<{ message: messageType; isOwner: Boolean }> = ({
  message,
  isOwner,
}) => {
  return (
    <MessageBox className={isOwner ? "self-message" : ""}>
      <MessageHeader>
        <MessageAvatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYuVsyAh_BIt_gT6a-dYbOVa9RztXdsrOZA&usqp=CAU" />
        <MessageHeaderUser>
          <p>Toto</p>
          <Divider />
        </MessageHeaderUser>
      </MessageHeader>
      <MessageText>{message.content}</MessageText>
      <MessageTime>{message.created_at}</MessageTime>
    </MessageBox>
  );
};

export default Message;
