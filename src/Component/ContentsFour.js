import styled from "styled-components";
import "../styles/css/App.css";

import ArrowImage from "../Image/ArrowBlack.png";

const ContentsFourContainer = styled.div`
  width: 100%;
  height: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #353535;
`;

const TextStyleOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const TextStyleFour = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const BlackBox = styled.div`
  width: 30vw;
  height: 12vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #101010;
  border-radius: 2vw;
  margin-left: 2vw;
`;

const SupplyBox = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 2vw;
  width: 30vw;
  height: 3.5vw;
  background-color: #dff6ff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ArrowImageSpan = styled.div`
  width: 4vw;
  height: 2.5vw;
  margin-left: 0.5vw;
  background-size: contain;
  background-image: url(${ArrowImage});
  background-position: center center;
  background-repeat: no-repeat;
`;

const ContentsFour = () => {
  return (
    <ContentsFourContainer>
      <TextStyleOne marginTop={"4vw"}>
        <text style={{ color: "white" }}>KGA 웹 개발자 양성과정</text>
      </TextStyleOne>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "white" }}>코딩에 처음 입문하는 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "white" }}>자바를 처음 배우는 분</text>
          </TextStyleTwo>
        </BlackBox>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "white" }}>파이썬 프로그래밍을</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>배우고 싶은 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "white" }}>자바와 파이썬을 함께</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>시작하고 싶은 분</text>
          </TextStyleTwo>
        </BlackBox>
      </div>
      <TextStyleFour marginTop={"3vw"}>
        <text style={{ color: "white" }}>
          프로그램 구현 능력을 기를 수 있습니다
        </text>
      </TextStyleFour>
      <TextStyleFour>
        <text style={{ color: "white" }}>
          다양한 언어의 기초 문법과 데이터 관리 등에 대해 학습합니다
        </text>
      </TextStyleFour>
      <TextStyleFour>
        <text style={{ color: "white" }}>
          전문적인 데이터를 관리하는 연구원, 개발자, 데이터 사이언티스트가 될 수
          있습니다
        </text>
      </TextStyleFour>
      <TextStyleFour>
        <text style={{ color: "white" }}>
          웹 어플리케이션 개발, 파이썬을 이용한 빅데이터 전문 과정입니다
        </text>
      </TextStyleFour>
      <TextStyleFour>
        <text style={{ color: "white" }}>
          많은 데이터를 직접 분석하는 빅데이터 전문가가 될 수 있습니다
        </text>
      </TextStyleFour>

      <SupplyBox
        as={"a"}
        href={"https://forms.gle/W5ndKUxNeXrbagQv9"}
        target="_blank"
      >
        <text
          style={{
            fontSize: "1.7vw",
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

export default ContentsFour;
