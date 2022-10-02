import axios from "axios";

export const getChatrooms = async () => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}chatrooms`)
    .then((res) => {
      return res.data;
    });
};

export const getCurrentChatroom = async (id: String | undefined) => {
  if (id === undefined) return;
  return await axios
    .get(`${process.env.REACT_APP_API_URL}chatrooms/${id}`)
    .then((res) => {
      return res.data;
    });
};
