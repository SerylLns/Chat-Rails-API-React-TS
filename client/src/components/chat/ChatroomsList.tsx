import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useAppSelector } from "../../store/hooks";
import { chatroomType } from "../../store/chatroomSlice";
import { useNavigate } from "react-router-dom";

const navItems = ["Home", "About", "Contact"];

const ChatroomsList = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { chatrooms, currentChatroom } = useAppSelector(
    (state) => state.chatrooms
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (chatroom: chatroomType) => {
    navigate(`/chat/${chatroom.id}`);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {chatrooms &&
          chatrooms.map((chatroom) => (
            <ListItem
              sx={{ padding: 1, boxShadow: 1 }}
              key={chatroom.id.toString()}
              disablePadding
            >
              <ListItemButton
                selected={currentChatroom?.id === chatroom.id}
                onClick={() => handleClick(chatroom)}
                color="#abd1c6"
                sx={{
                  textAlign: "center",
                }}
              >
                <ListItemText primary={chatroom.name} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
  return (
    <AppBar
      component="nav"
      position="fixed"
      style={{
        left: "0",
        top: "0",
        width: "17vw",
        backgroundColor: "#001e1d",
        height: "100vh",
      }}
    >
      {mobileOpen ? (
        drawer
      ) : (
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // sx={{ mr: 2, display: "none" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: "block" }}
          >
            Channels
          </Typography>
        </Toolbar>
      )}
    </AppBar>
  );
};

export default ChatroomsList;
