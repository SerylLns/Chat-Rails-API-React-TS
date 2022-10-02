import { ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Home from "./Home";
import SignInSide from "./Sign-in";
import { useAppSelector } from "./store/hooks";
import { theme } from "./styles/ThemeContext";

function App() {
  const { token, isConnected } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (isConnected) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, [isConnected, token]);

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:id" element={<Chat />} />
        <Route path="/sign-in" element={<SignInSide />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
