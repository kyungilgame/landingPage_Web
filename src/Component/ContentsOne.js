import React, { useState } from "react";

import styled from "styled-components";
import "../styles/css/App.css";

import Image from "../Image/firstBackgroundImage.png";
import BlackLogo from "../Image/BlackMinistryImage.png";
import Logo from "../Image/logo.png";

const ContentsOneContainer = styled.div`
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
  background-size: contain;
  background-image: url(${Image});
  background-position: center top;
  background-repeat: no-repeat;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  color: #f4f4f4;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  color: #101010;
`;

const ContentsBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  margin-top: 2vw;
  width: 30vw;
  height: 21vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FirstLineInnerBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  color: #051367;
  margin-top: 2.5vw;
  margin-bottom: 1vw;
`;

const LastLineInnerBox = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 0.5vw;
  width: 20vw;
  height: 3vw;
  background-color: #101010;
  margin-top: 2vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ImageContainerOne = styled.div`
  width: 10vw;
  height: 3vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 3vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const InnerContentsBox = ({ title, duration }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "0.5vw",
      }}
    >
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Bold",
            fontSize: "1vw",
            color: "#353535",
          }}
        >
          {`${title}`}
        </text>
      </div>
      <div
        style={{
          height: "1vw",
          width: "0.15vw",
          backgroundColor: "#353535",
          marginTop: "0.3vw",
          marginLeft: "1vw",
        }}
      ></div>
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: "1vw",
            marginTop: "0.5vw",
            marginLeft: "1vw",
          }}
        >
          {`${duration}`}
        </text>
      </div>
    </div>
  );
};

const ContentsOne = ({ open, setOpen, onOpenModal, onCloseModal }) => {
  return (
    <>
      <ContentsOneContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "25vw",
            height: "5vw",
            marginTop: "7vw",
          }}
        >
          <ImageContainerOne src={Logo}></ImageContainerOne>
          <div>
            <XImageLeft></XImageLeft>
            <XImageRight></XImageRight>
          </div>
          <ImageContainerOne src={BlackLogo}></ImageContainerOne>
        </div>
        <FirstLine>Java/Python 기반 공공데이터 sw 엔지니어</FirstLine>
        <SecondLine>공공데이터</SecondLine>
        <SecondLine>웹 개발자 부트캠프</SecondLine>
        <ContentsBox>
          <FirstLineInnerBox>KGA 웹개발 부트캠프 3기</FirstLineInnerBox>
          <InnerContentsBox
            title={"기간"}
            duration={"2022.05.16 – 2022.12.14"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"시간"}
            duration={"PM 15:30 ~ PM 22:00"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"모집마감"}
            duration={"2022.05.10"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"합격자 발표일"}
            duration={"2022.05.13"}
          ></InnerContentsBox>
          <LastLineInnerBox
            onClick={() => {
              onOpenModal();
            }}
          >
            <text
              style={{
                fontSize: "1.5vw",
                color: "white",
              }}
            >
              지원하기
            </text>
          </LastLineInnerBox>
        </ContentsBox>
        <div style={{ marginTop: "1vw" }}>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#353535",
              marginTop: "0.5vw",
            }}
          >
            해당 부트캠프는 국가기간전략훈련 과정으로{` `}
          </text>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#101010",
              marginTop: "0.5vw",
            }}
          >
            국민내일배움카드
          </text>
          <text
            style={{
              fontSize: "1vw",
              fontFamily: "Pretendard-Bold",
              color: "#353535",
              marginTop: "0.5vw",
            }}
          >
            가 필요합니다.
          </text>
        </div>
      </ContentsOneContainer>
    </>
  );
};

export default ContentsOne;
