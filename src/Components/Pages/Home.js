import React from "react";
import styled from "styled-components";
import Video from "../Video";

export default function Home() {
  return (
    <VideoSection>
      <Video />
      <Video />
      <Video />
      <Video />
    </VideoSection>
  );
}
const VideoSection = styled.section`
  display: flex;
  justify-content: space-around;
`;
