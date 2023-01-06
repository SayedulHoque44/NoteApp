import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Account from "./Account";

export default function Navbar() {
  let Id = 36;
  let Mystate = {
    Mname: "sayed",
    Score: "16 Points",
  };
  return (
    <Nav>
      <LogoArea>
        <Link to="/">Quiz App</Link>
      </LogoArea>
      <Account />
    </Nav>
  );
}
const LogoArea = styled.div``;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
