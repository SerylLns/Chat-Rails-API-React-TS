import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DEFAULT_COLORS } from "../../services/colors";

const inputOptions = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline"],
    [{ font: ["monospace", "sans serif", "serif"] }],
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
    <ReactQuill
      theme="snow"
      modules={inputOptions}
      value={value}
      onChange={setValue}
    ></ReactQuill>
  );
};

export default MessageForm;
