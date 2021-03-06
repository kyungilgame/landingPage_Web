import styled from "styled-components";
import "../styles/css/App.css";

import ReactPlayer from "react-player/youtube";

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  color: #051367;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }};
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;

const VideoPlayWrapper = styled.div`
  width: 50vw;
  height: 30vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 2vw;
`;

const Video = () => {
  return (
    <VideoContainer>
      <LineSizeOne marginTop={"5vw"}>망설이지 말고 </LineSizeOne>
      <LineSizeOne>바로 시작하세요</LineSizeOne>
      <LineSizeTwo>남들보다 쉽게 개발 커리어를 시작하세요!</LineSizeTwo>
      <VideoPlayWrapper>
        <ReactPlayer
          url="https://youtu.be/5K8GYWfGbnw"
          width="50vw"
          height="30vw"
        />
      </VideoPlayWrapper>
    </VideoContainer>
  );
};

export default Video;
