import axios from "axios";

export const loginRequest = async (data: FormData) => {
  const res = await axios
    .post(`${process.env.REACT_APP_API_URL}login`, {
      username: data.get("username"),
      password: data.get("password"),
    })
    .then((res) => {
      if (res.data) {
        return res.data;
      } else {
        throw new Error("Erreur authentification");
      }
    });
  return res;
};
