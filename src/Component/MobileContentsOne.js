import styled from "styled-components";
import "../styles/css/App.css";

import Image from "../Image/MobileBackgroundImage.png";

const ContentsOneContainer = styled.div`
  width: 100%;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
  background-size: 100% 50%;
  background-image: url(${Image});
  background-position: center top;
  background-repeat: no-repeat;
`;

const FirstLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.5vw;
  color: #f4f4f4;
  margin-top: 4vw;
`;

const SecondLine = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 6vw;
  color: #101010;
`;

const ContentsBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  margin-top: 2vw;
  width: 75vw;
  height: 60vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const FirstLineInnerBox = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 4vw;
  color: #051367;
  margin-top: 4vw;
  margin-bottom: 1vw;
`;

const LastLineInnerBox = styled.button`
  font-family: "Pretendard-Bold";
  margin-top: 1vw;
  width: 100%;
  height: 7vw;
  background-color: #101010;
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const InnerContentsBox = ({ title, duration }) => {
  return (
    <>
      <div style={{ marginTop: "1vw" }}>
        <text style={{ fontFamily: "Pretendard-Bold", fontSize: "3vw" }}>
          {`${title}`}
        </text>
      </div>
      <div
        style={{
          width: "4vw",
          height: "0.15vw",
          backgroundColor: "#0d7377",
          marginTop: "1vw",
          marginBottom: "1vw",
        }}
      ></div>
      <div>
        <text
          style={{
            fontFamily: "Pretendard-Regular",
            fontSize: "2.5vw",
            marginTop: "1.5vw",
          }}
        >
          {`${duration}`}
        </text>
      </div>
    </>
  );
};

const MobileContentsOne = () => {
  return (
    <>
      <ContentsOneContainer>
        <FirstLine>Java/Python 기반 </FirstLine>
        <SecondLine>공공데이터</SecondLine>
        <SecondLine>웹 개발자 양성과정</SecondLine>
        <text
          style={{
            fontSize: "2.5vw",
            fontFamily: "Pretendard-Regular",
            color: "#101010",
            marginTop: "1.5vw",
          }}
        >
          KGA 웹개발 과정은 웹/앱 개발과
        </text>
        <text
          style={{
            fontSize: "2.5vw",
            fontFamily: "Pretendard-Regular",
            color: "#101010",
          }}
        >
          빅데이터, 공공데이터를 통합한 과정입니다.
        </text>
        <text
          style={{
            fontSize: "2.5vw",
            fontFamily: "Pretendard-Regular",
            color: "#101010",
          }}
        >
          배우는 언어의 커버리지가 넓고, 넓은 스펙트럼을 경험할 수 있어
        </text>
        <text
          style={{
            fontSize: "2.5vw",
            fontFamily: "Pretendard-Regular",
            color: "#101010",
          }}
        >
          다양한 직군으로의 취업이 가능합니다.
        </text>
        <text
          style={{
            fontSize: "2.5vw",
            fontFamily: "Pretendard-Regular",
            color: "#101010",
          }}
        >
          KGA가 제공하는 최적의 커리큘럼을 통해
        </text>
        <text
          style={{
            fontSize: "2.5vw",
            fontFamily: "Pretendard-Regular",
            color: "#101010",
          }}
        >
          이전에는 경험하지 못한 성장을 이루어 보세요.
        </text>
        <ContentsBox>
          <FirstLineInnerBox>KGA 공공데이터 웹개발 3기</FirstLineInnerBox>
          <InnerContentsBox
            title={"기간"}
            duration={"2022.06.08 ~ 2022.12.30"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"시간"}
            duration={"PM 15:30 ~ PM 22:00"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"모집마감"}
            duration={"2022.06.03"}
          ></InnerContentsBox>
          <InnerContentsBox
            title={"합격자 발표일"}
            duration={"2022.06.07"}
          ></InnerContentsBox>
          <LastLineInnerBox
            as={"a"}
            href={"https://forms.gle/W5ndKUxNeXrbagQv9"}
          >
            <text
              style={{
                fontSize: "4vw",
                color: "white",
                marginLeft: "0.5vw",
              }}
            >
              지원하기
            </text>
          </LastLineInnerBox>
        </ContentsBox>
      </ContentsOneContainer>
    </>
  );
};

export default MobileContentsOne;
