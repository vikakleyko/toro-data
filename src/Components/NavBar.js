import React from "react";
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #000;
  color: white;
`;

export function NavBar() {
  return (
      <Header>
        <h3>Toro Data</h3>
      </Header>
  );
}
