import styled from "styled-components";
import "../styles/css/App.css";

import ArrowImage from "../Image/ArrowBlack.png";

const ContentsFourContainer = styled.div`
  width: 100%;
  height: 150vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #353535;
`;

const TextStyleOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleFour = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const BlackBox = styled.div`
  width: 50vw;
  height: 17vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101010;
  border-radius: 2vw;
  margin-left: 2vw;
  margin-top: 2vw;
`;

const SupplyBox = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 2vw;
  width: 45vw;
  height: 6vw;
  background-color: #dff6ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ArrowImageSpan = styled.div`
  width: 10vw;
  height: 5vw;
  margin-left: 1vw;
  background-size: contain;
  background-image: url(${ArrowImage});
  background-position: center center;
  background-repeat: no-repeat;
`;

const MobileContentsFour = () => {
  return (
    <ContentsFourContainer>
      <TextStyleOne marginTop={"7vw"}>
        <text style={{ color: "white" }}>KGA 웹 개발자 양성과정 </text>
      </TextStyleOne>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4" }}>코딩에 처음 입문하시는 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4", marginTop: "2vw" }}>
              자바를 처음 배우는 분
            </text>
          </TextStyleTwo>
        </BlackBox>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4" }}>파이썬 프로그래밍을</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4" }}>배우고 싶은 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4" }}>자바와 파이썬을 함께</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4" }}>시작하고 싶은 분</text>
          </TextStyleTwo>
        </BlackBox>
      </div>
      <TextStyleFour marginTop={"5vw"} style={{ fontSize: "3vw" }}>
        <text style={{ color: "white" }}>
          프로그램 구현 능력을 기를 수 있습니다
        </text>{" "}
      </TextStyleFour>
      <TextStyleFour style={{ fontSize: "3vw", marginTop: "2vw" }}>
        <text style={{ color: "white" }}>
          다양한 언어의 기초 문법과 데이터 관리 등에 대해 학습합니다
        </text>{" "}
      </TextStyleFour>
      <TextStyleFour style={{ fontSize: "3vw", marginTop: "2vw" }}>
        <text style={{ color: "white" }}>전문적인 데이터를 관리하는</text>{" "}
      </TextStyleFour>
      <TextStyleFour style={{ fontSize: "3vw" }}>
        <text style={{ color: "white" }}>
          연구원, 개발자, 데이터 과학자가 될 수 있습니다
        </text>{" "}
      </TextStyleFour>
      <TextStyleFour style={{ fontSize: "3vw", marginTop: "2vw" }}>
        <text style={{ color: "white" }}>
          웹 어플리케이션 개발, 파이썬을 이용한 빅데이터 전문과정입니다
        </text>{" "}
      </TextStyleFour>
      <TextStyleFour style={{ fontSize: "3vw", marginTop: "2vw" }}>
        <text style={{ color: "white" }}>많은 데이터를 직접 분석하는</text>{" "}
      </TextStyleFour>
      <TextStyleFour style={{ fontSize: "3vw", marginBottom: "6vw" }}>
        <text style={{ color: "white" }}>빅데이터 전문가가 될 수 있습니다</text>{" "}
      </TextStyleFour>
      <SupplyBox as={"a"} href={"https://forms.gle/W5ndKUxNeXrbagQv9"}>
        <text
          style={{
            fontSize: "3.5vw",
            color: "#101010",
            marginLeft: "0.5vw",
          }}
        >
          신청하러가기
        </text>
        <ArrowImageSpan></ArrowImageSpan>
      </SupplyBox>
    </ContentsFourContainer>
  );
};

export default MobileContentsFour;
