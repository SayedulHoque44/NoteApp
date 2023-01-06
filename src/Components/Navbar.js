import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  let Id = 36;
  let Mystate = {
    Mname: "sayed",
    Score: "16 Points",
  };
  return (
    <Nav>
      <Link to={`Quiz/${Id}`}>Quiz Page</Link>
      {/*We can send Id/Code Like This */}

      <Link to={`Login`}>Login Page</Link>
      <Link to={`Signup`}>Signup Page</Link>

      <Link to={`Result`} state={Mystate}>
        {/*We can send also object Like This by state property */}
        Result Page
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  a {
    text-decoration: none;
    background-color: aqua;
    padding: 10px;
  }
`;
