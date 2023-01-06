import React from "react";
import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { state } = location;
  // and we can take this object by this useLocation()
  // console.log(state);
  return (
    <div>
      <h2>This Is Result Page</h2>
      <p>
        Name = {state.Mname} <br /> Score Is {state.Score}
      </p>
    </div>
  );
}
