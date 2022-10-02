import ChatroomsList from "./ChatroomsList";
import { useQuery } from "@tanstack/react-query";
import { getChatrooms } from "./api/chatroomRequest";
import { useAppDispatch } from "./store/hooks";
import { useEffect } from "react";
import { setChatrooms } from "./store/chatroomSlice";
import Chat from "./Chat";

const Home = () => {
  const { data, isLoading } = useQuery(["chatrooms"], getChatrooms);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setChatrooms(data.chatrooms));
    }
  }, [data, dispatch]);
  return (
    <div>
      <ChatroomsList />
    </div>
  );
};

export default Home;
