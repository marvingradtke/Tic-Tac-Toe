import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  background: wheat;
  border: 2px solid white;
  float: left;
  font-size: 24px;
  font-weight: bold;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  outline: none;
`;

export default function Square({ value, onClick }) {
  return <Button onClick={onClick}>{value}</Button>;
}
