import styled from "styled-components";
import "../styles/css/App.css";

import ReactPlayer from "react-player/youtube";

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 8vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 7vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const VideoContainer = styled.div`
  width: 100%;
  height: 110vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;

const VideoPlayWrapper = styled.div`
  width: 100%;
  height: 90vw;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: #101010;
  margin-top: 2vw;
`;

const MobileVideo = () => {
  return (
    <VideoContainer>
      <LineSizeOne marginTop={"5vw"}>도전하세요!</LineSizeOne>
      <LineSizeTwo>
        여러분도 <text style={{ color: "#051367" }}>할 수 있습니다</text>
      </LineSizeTwo>
      <VideoPlayWrapper>
        <ReactPlayer
          url="https://youtu.be/5K8GYWfGbnw"
          width="100%"
          height="100%"
        />
      </VideoPlayWrapper>

      <div style={{ height: "15vw" }}></div>
    </VideoContainer>
  );
};

export default MobileVideo;
