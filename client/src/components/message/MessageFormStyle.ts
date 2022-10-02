import styled from "@emotion/styled";

export const MessageFormRight = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 10%;
  span {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font-size: 12px;
    font-style: italic;
    color: #f4faff;
  }
  button {
    width: 90%;
    margin-left: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #dee7e7;
    border: none;
    align-self: start;
    height: 6vh;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background: #f4faff;
      svg {
        fill: #4f646f;
      }
    }
    svg {
      fill: #000000;
    }
  }
`;

export const MessageFormContainer = styled.div`
  width: 100%;
  height: 120px;
  margin: 10px;
  background-color: #4f646f;
  padding: 10px;
  align-self: center;
  display: flex;
  border-radius: 6px;
  align-items: start;
  opacity: 0.9;
  .quill {
    width: 90%;
    height: 100%;
    background: #dee7e7;
    border-radius: 6px;
    border: none;
    .ql-container.ql-snow {
      border: none;
    }
    .ql-toolbar {
      border: none;
      border-bottom: 1px solid #4f646f;
      opacity: 0.8;
    }
  }
`;
