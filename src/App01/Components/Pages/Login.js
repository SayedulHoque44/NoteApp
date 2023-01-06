import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const { state } = useLocation();

  return (
    <div>
      <h2>This Is Login Page</h2>
      <P>{state ? state : undefined}</P>
    </div>
  );
}

const P = styled.p`
  color: orange;
`;
