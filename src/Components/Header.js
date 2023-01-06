import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <HeaderArea>
      <Navbar />
    </HeaderArea>
  );
}
const HeaderArea = styled.header`
  padding: 10px 30px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  background-color: #fff;
  overflow: hidden;
  a {
    text-decoration: none;
  }
`;
