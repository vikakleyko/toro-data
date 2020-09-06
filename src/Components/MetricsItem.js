import React from "react";
import styled from "styled-components";

const Column = styled.span`
  flex-basis: 300px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 15px 20px;
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px 0;
  background-color: #fff;
  color: #5f5e5e;
  &:hover {
    cursor: pointer;
    color: black;
  }
`;

export function MetricsItem({ table, column, metric, value }) {
  return (
    <List>
      <Column>{table}</Column>
      <Column>{column}</Column>
      <Column>{metric}</Column>
      <Column>{value}</Column>
    </List>
  );
}
