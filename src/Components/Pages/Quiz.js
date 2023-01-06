import React from "react";
import { useParams } from "react-router-dom";

export default function Quiz() {
  const { id } = useParams();
  // and Now We can take this is like this
  return <div>This Is Quiz & Id = {id} Page</div>;
}
