import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DEFAULT_COLORS } from "../../services/colors";
import { MessageFormContainer, MessageFormRight } from "./MessageFormStyle";
import SendIcon from "@mui/icons-material/Send";

const inputOptions = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    // [{ font: ["monospace", "sans serif", "serif"] }],
    ["image", "link", "code-block"],
    [
      {
        color: DEFAULT_COLORS,
      },
      { background: DEFAULT_COLORS },
    ],
  ],
};

const MessageForm = () => {
  const [value, setValue] = useState("");
  return (
    <MessageFormContainer>
      <ReactQuill
        theme="snow"
        modules={inputOptions}
        value={value}
        onChange={setValue}
      ></ReactQuill>
      <MessageFormRight>
        <span>123/500(max)</span>
        <button>
          <SendIcon />
        </button>
      </MessageFormRight>
    </MessageFormContainer>
  );
};

export default MessageForm;
