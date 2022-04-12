import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 230vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;
const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const XImageLeft = styled.div`
  width: 5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(45deg);
`;

const XImageRight = styled.div`
  width: 5vw;
  height: 0.1vw;
  background-color: #cecece;
  transform: rotate(-45deg);
`;

const ImageContainerOne = styled.div`
  width: 15vw;
  height: 15vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const MiddleLineContainer = styled.div`
  width: 100%;
  height: 5vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vw;
`;

const GreenBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140vw;
  margin-top: 8vw;
`;

const GreenBoxWrapperOne = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #5d8bf4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  margin-top: 3vw;
  background-size: 12vw 0.8vw;
  background-image: url(${LongLine});
  background-position: right 50% bottom 69%;
  background-repeat: no-repeat;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 15vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 63% bottom 68%;
  background-repeat: no-repeat;
  margin-top: 3vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const GreenBoxWrapperThree = styled.div`
  width: 50vw;
  height: 25vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 10vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 65% bottom 68%;
  background-repeat: no-repeat;
  margin-top: 3vw;
  box-shadow: 0.1vw 0.1vw 0.1vw 0.1vw lightgray;
`;

const MobileContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeOne marginTop={"6vw"}>
        <text style={{ color: "#051367" }}>공공데이터란?</text>
      </LineSizeOne>
      <LineSizeTwo marginTop={"3vw"}>
        <text>공공기관이 생성하거나 관리하는 자료 또는 정보</text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text>기관이 업무를 수행하며 만들어낸</text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text>다양한 형태의 모든 자료 또는 정보</text>
      </LineSizeTwo>

      <LineSizeOne marginTop={"5vw"}>IT 취업의 전통 강자 KGA</LineSizeOne>

      <LineSizeOne>
        <text style={{ color: "#051367" }}>믿고 따라오세요!🚀</text>
      </LineSizeOne>
      <div
        style={{
          width: "50vw",
          height: "10vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5vw",
        }}
      >
        <ImageContainerOne src={Logo}></ImageContainerOne>
        <div>
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </div>
        <ImageContainerOne src={MinistryImage}></ImageContainerOne>
      </div>
      <MiddleLineContainer>
        <div
          style={{ width: "20%", height: "0.5vw", backgroundColor: "#5D8BF4" }}
        ></div>
        <LineSizeOne>
          <text style={{ color: "#051367" }}>공공데이터 적용 분야</text>
        </LineSizeOne>
        <div
          style={{ width: "20%", height: "0.5vw", backgroundColor: "#5D8BF4" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>인구/생활</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>산업고용</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>식품건강</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>교통물류</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>통일외교</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>법률</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>경제/공공</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>산업고용</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>재정금융</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>공공행정</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>농축수산</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>교육/문화</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>교육</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>문화관광</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>과학기술</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>

        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>의료/복지</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>보건의료</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>사회복지</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>재난/환경</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>재난안전</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>국토관리</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>환경기상</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
      </GreenBoxContainer>
    </ContentsTwoContainer>
  );
};

export default MobileContentsTwo;
