import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  padding: 100px 0px;
  background-color: #ffefd5;
`;
