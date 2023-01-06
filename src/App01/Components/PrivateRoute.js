import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute({ loginCheaker }) {
  const loginState = "You Must Have To Login First !";
  return loginCheaker ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" state={loginState} />
  );
}
