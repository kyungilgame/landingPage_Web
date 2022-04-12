import React, { useState } from "react";
import styled from "styled-components";
import "../styles/css/App.css";

const ContentsThreeContainer = styled.div`
  width: 100%;
  height: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;

const LineTextOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextThree = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFour = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextFive = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineTextSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2.4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const SectionBox = styled.button`
  font-family: "Pretendard-ExtraBold";
  width: 20vw;
  height: 4.5vw;
  border-radius: 1vw;
  border-color: #5d8bf4;
  font-size: 3vw;
  color: white;
  cursor: pointer;
  margin-top: 1vw;
  ${({ backgroundColor }) => {
    return backgroundColor ? `background-color: ${backgroundColor}` : null;
  }}
`;

const SectionPage = (sectionState) => {
  if (sectionState === 1) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>프로그래밍 입문하기</LineTextFive>
        <LineTextFour marginTop={"2vw"}>웹의 작동 방식</LineTextFour>
        <LineTextFour marginTop={"1vw"}>웹,앱 개발의 절차와 방식</LineTextFour>
        <LineTextFour marginTop={"1vw"}>HTML 입문하기</LineTextFour>
        <LineTextFour marginTop={"1vw"}>CSS 활용하기</LineTextFour>
        <LineTextFour marginTop={"1vw"}>자바스크립트 입문</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          첫번째 웹 페이지 만들어 보기
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          첫번째 정적 웹 페이지 호스팅해 보기
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 2) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>프로그래밍 언어 심화</LineTextFive>

        <LineTextFour marginTop={"2vw"}>깃허브를 이용한 버전관리</LineTextFour>
        <LineTextFour marginTop={"1vw"}>자바스크립트 심화</LineTextFour>
        <LineTextFour marginTop={"1vw"}>자바 입문</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          자바와 객체지향 프로그래밍
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 3) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>스프링 프레임워크</LineTextFive>

        <LineTextFour marginTop={"2vw"}>스프링 개발 환경 구축</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          스프링으로 웹 게시판 만들기
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>파일 업로드 처리</LineTextFour>
        <LineTextFour marginTop={"1vw"}>로그인 처리</LineTextFour>
        <LineTextFour marginTop={"1vw"}>전자정부 프레임워크 학습</LineTextFour>
      </div>
    );
  } else if (sectionState === 4) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>공공데이터 활용하기</LineTextFive>

        <LineTextFour marginTop={"2vw"}>데이터베이스와 SQL 입문</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          빅데이터 수집 시스템을 위한 Pyhon 언어 학습
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          빅데이터 라이브러리를 활용한 분석, 시각화, 통계분석, 자동화
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          공공 빅데이터 접근, 활용하기
        </LineTextFour>
      </div>
    );
  } else if (sectionState === 5) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>공공데이터 융합 프로젝트</LineTextFive>

        <LineTextFour marginTop={"2vw"}>
          공공 빅데이터를 활용한 웹/앱 어플리케이션 설계
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          공공 빅데이터를 활용한 웹/앱 어플리케이션 개발 프로젝트
        </LineTextFour>
        <LineTextFour marginTop={"1vw"}>프로젝트 발표회</LineTextFour>
      </div>
    );
  } else if (sectionState === 6) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f4f4f4",
        }}
      >
        <LineTextFive marginTop={"2vw"}>취업 준비</LineTextFive>

        <LineTextFour marginTop={"2vw"}>취업 특강</LineTextFour>
        <LineTextFour marginTop={"1vw"}>취업전략 설계</LineTextFour>
        <LineTextFour marginTop={"1vw"}>
          취업서류 지도, 모의면접, 기업 연계
        </LineTextFour>
      </div>
    );
  }
};

const MobileContentsThree = () => {
  const [sectionState, setSectionState] = useState(1);
  return (
    <ContentsThreeContainer>
      <LineTextOne marginTop={"5vw"}>불필요한 내용은 빼고</LineTextOne>
      <LineTextOne>
        <text style={{ color: "#2D31FA" }}>취업에 꼭 필요한 내용</text>으로
      </LineTextOne>
      <LineTextOne> 채웠습니다</LineTextOne>
      <div
        style={{
          width: "100%",
          height: "5vw",
          textAlign: "center",
          paddingTop: "0.2vw",
          marginTop: "0.5vw",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "70vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "15vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "7vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {sectionState === 1 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(1);
                  }}
                  backgroundColor={"#051367"}
                >
                  Section 1
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(1);
                  }}
                  backgroundColor={"#5D8BF4"}
                >
                  Section 1
                </SectionBox>
              )}
              {sectionState === 2 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(2);
                  }}
                  backgroundColor={"#051367"}
                >
                  Section 2
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(2);
                  }}
                  backgroundColor={"#5D8BF4"}
                >
                  Section 2
                </SectionBox>
              )}
              {sectionState === 3 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(3);
                  }}
                  backgroundColor={"#051367"}
                >
                  Section 3
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(3);
                  }}
                  backgroundColor={"#5D8BF4"}
                >
                  Section 3
                </SectionBox>
              )}
              {sectionState === 4 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(4);
                  }}
                  backgroundColor={"#051367"}
                >
                  Section 4
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(4);
                  }}
                  backgroundColor={"#5D8BF4"}
                >
                  Section 4
                </SectionBox>
              )}
            </div>
            <div
              style={{
                width: "100%",
                height: "7vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {sectionState === 5 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(5);
                  }}
                  backgroundColor={"#051367"}
                >
                  Section 5
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(5);
                  }}
                  backgroundColor={"#5D8BF4"}
                >
                  Section 5
                </SectionBox>
              )}
              {sectionState === 6 ? (
                <SectionBox
                  onClick={() => {
                    setSectionState(6);
                  }}
                  backgroundColor={"#051367"}
                  style={{ marginLeft: "4vw" }}
                >
                  Section 6
                </SectionBox>
              ) : (
                <SectionBox
                  onClick={() => {
                    setSectionState(6);
                  }}
                  backgroundColor={"#5D8BF4"}
                  style={{ marginLeft: "4vw" }}
                >
                  Section 6
                </SectionBox>
              )}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "50vw",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {SectionPage(sectionState)}
          </div>
        </div>
      </div>
    </ContentsThreeContainer>
  );
};

export default MobileContentsThree;
