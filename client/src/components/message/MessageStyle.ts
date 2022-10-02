import styled from "@emotion/styled";

export const MessageBox = styled.div`
  width: 40%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  background: #f9bc60;
  box-shadow: 1px 1px 12px #abd1c6;
`;

export const MessageAvatar = styled.img`
  width: 12%;
  border-radius: 100%;
  object-fit: contain;
`;

export const MessageHeader = styled.div`
  display: flex;
`;

export const MessageHeaderUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    align-self: center;
    margin: 5px;
    color: #001e1d;
    font-size: 13px;
    font-weight: 600;
  }
`;

export const MessageText = styled.p`
  margin: 10px;
  font-size: 13px;
`;
export const Divider = styled.span`
  width: 96%;
  height: 0.5px;
  background-color: #000000;
  margin: 0px 2%;
`;

export const MessageTime = styled.span`
  text-align: right;
  font-size: 10px;
  font-style: italic;
  color: #605d5dcc;
  margin-right: 10px;
`;
