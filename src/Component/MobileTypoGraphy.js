import styled from "styled-components";
import "../styles/css/App.css";

import Typed from "react-typed";

const TypoGraphyContainer = styled.div`
  width: 100%;
  height: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dff6ff;
`;

const LineText = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const MobileTypoGraphy = () => {
  return (
    <TypoGraphyContainer>
      <div style={{ width: "60vw", marginLeft: "8vw" }}>
        <LineText>
          <text>부트캠프 수강 후 여러분들은</text>
        </LineText>
      </div>
      <div
        style={{
          width: "50vw",
          display: "flex",
          flexDirection: "row",
          marginTop: "0.5vw",
        }}
      >
        <Typed
          strings={[
            "데이터 엔지니어",
            "데이터 분석가",
            "빅데이터 개발자",
            "금융권 데이터 컨설턴트",
            "빅데이터 거버넌스 컨설턴트",
            "데이터 사이언티스트",
            "데이터 랭글러",
            "데이터 인터프리터",
          ]}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input
            type="text"
            style={{
              width: "50vw",
              height: "6vw",
              border: "solid",
              borderColor: "gray",
              boxShadow: "0.1vw 0.1vw 0.1vw 0.1vw #5D8BF4",
              paddingTop: "1vw", // placeholder 상하 위치 조절
              fontSize: "4vw",
            }}
          />
        </Typed>
        <LineText>
          <text style={{ marginLeft: "0.5vw" }}>가</text>
        </LineText>
      </div>
      <LineText>
        <text>될 수 있습니다!</text>
      </LineText>
    </TypoGraphyContainer>
  );
};

export default MobileTypoGraphy;
