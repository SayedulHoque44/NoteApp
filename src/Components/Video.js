import styled from "styled-components";
import videoImg from "../assets/images/3.jpg";
import Img from "./Img";

export default function Video() {
  return (
    <VideoContent>
      <Img imgSrc={videoImg} />
      <h3>#01 JavaScript Bangla Tutorial | Introduction</h3>
      <NoAndPoint>
        <span>4</span>
        <span>Total Points : 20</span>
      </NoAndPoint>
    </VideoContent>
  );
}

const VideoContent = styled.div`
  padding: 10px;
  background-color: #fff;
  margin: 0 10px;
  img {
    width: 100%;
  }
`;
const NoAndPoint = styled.div`
  display: flex;
  justify-content: space-between;
`;
