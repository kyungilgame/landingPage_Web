import styled from "styled-components";
import "../styles/css/App.css";

import ArrowImage from "../Image/ArrowBlack.png";

const ContentsFourContainer = styled.div`
  width: 100%;
  height: 125vw;
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
        <text style={{ color: "white" }}>아래의 자격을 갖췄다면 </text>
      </TextStyleOne>
      <TextStyleOne>
        <text style={{ color: "white" }}>지원</text>
        <text style={{ color: "white" }}>하세요</text>
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
            <text style={{ color: "#5D8BF4" }}>국민내일배움카드</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>발급이 가능한 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4" }}>15시 30분부터 22시까지</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>풀타임 학습이 가능한 분</text>
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
            <text style={{ color: "#5D8BF4" }}>흥미가 아니라</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>취업을 위해 전력질주 하실 분</text>
          </TextStyleTwo>
        </BlackBox>
        <BlackBox>
          <TextStyleTwo>
            <text style={{ color: "#5D8BF4" }}>지금이 마지막이라는</text>
          </TextStyleTwo>
          <TextStyleTwo>
            <text style={{ color: "white" }}>절박감으로 도전하실 분</text>
          </TextStyleTwo>
        </BlackBox>
      </div>
      <TextStyleFour marginTop={"3vw"}>
        <text style={{ color: "white" }}>국민내일배움카드가 처음이신가요?</text>
      </TextStyleFour>

      <TextStyleThree>
        <text style={{ color: "#DFF6FF" }}>쉽고 빠르게 신청하세요!</text>
      </TextStyleThree>
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
