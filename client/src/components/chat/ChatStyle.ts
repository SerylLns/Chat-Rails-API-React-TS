import styled from "@emotion/styled";

export const ChatContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  padding: 0px 30px;
  flex-direction: column;
  background: #e8e4e6;
  border-radius: 14px;
  .self-message {
    align-self: end;
    background: #abd1c6;
  }
`;

export const ChatTitle = styled.h1`
  text-align: center;
  font-size: 32px;
  color: #001e1d;
`;
