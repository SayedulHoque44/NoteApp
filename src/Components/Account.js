import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Account() {
  return (
    <AccountDiv>
      <Link to={"Signup"}>Signup</Link>
      <Link to={"Login"}>Login</Link>
    </AccountDiv>
  );
}

const AccountDiv = styled.div`
  display: flex;
  justify-content: end;
  a {
    text-decoration: none;
    margin-right: 8px;
  }
`;
