import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";
import Companys from "../Image/Companys.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 190vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f4f4f4;
`;
const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeOnePlus = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 1.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.3vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSeven = styled.div`
  font-family: "Pretendard-Light";
  font-size: 1.2vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
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

const ImageContainerOne = styled.div`
  width: 10vw;
  height: 5vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const ImageContainerTwo = styled.div`
  width: 14vw;
  height: 7vw;
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
  margin-top: 5vw;
`;

const GreenBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  height: 25vw;
  margin-top: 5vw;
`;

const GreenBoxWrapperOne = styled.div`
  width: 15vw;
  height: 20vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #5d8bf4;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-size: 9vw 0.5vw;
  background-image: url(${LongLine});
  background-position: right 50% bottom 66%;
  background-repeat: no-repeat;
`;

const GreenBoxWrapperTwo = styled.div`
  width: 25vw;
  height: 20vw;
  border: solid;
  border-width: thin;
  border-radius: 3vw;
  border-color: #00ffd6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 3vw;
  background-size: 12vw 1.3vw;
  background-image: url(${LongLine});
  background-position: right 66% bottom 67%;
  background-repeat: no-repeat;
`;

const ContentsBoxContainer = styled.div`
  width: 100%;
  height: 25vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3vw;
`;

const BlackBoxWrapper = styled.div`
  width: 100%;
  height: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
`;

const LastContentsWrapper = styled.div`
  width: 100%;
  height: 50vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LastContentsInnerBox = styled.div`
  width: 20vw;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentsTwo = () => {
  return (
    <ContentsTwoContainer>
      <LineSizeOne marginTop={"5vw"}>
        <text style={{ color: "#051367" }}>공공데이터란?</text>
      </LineSizeOne>
      <LineSizeOnePlus marginTop={"3vw"} style={{ fontSize: "2.5vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>공공기관이 생성하거나 관리하는 자료 또는 정보</text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOnePlus style={{ marginTop: "3vw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>기관이 업무를 수행하며 만들어낸 </text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOnePlus>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>다양한 형태의 모든 자료 또는 정보</text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOne marginTop={"8vw"}>IT 취업의 전통 강자 KGA</LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#051367" }}>믿고 따라오세요🚀</text>
      </LineSizeOne>
      <div
        style={{
          width: "50vw",
          height: "10vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "1vw",
        }}
      >
        <ImageContainerOne src={Logo}></ImageContainerOne>
        <div>
          <XImageLeft></XImageLeft>
          <XImageRight></XImageRight>
        </div>
        <ImageContainerTwo src={MinistryImage}></ImageContainerTwo>
      </div>
      <MiddleLineContainer>
        <div
          style={{ width: "35%", height: "0.2vw", backgroundColor: "#5D8BF4" }}
        ></div>
        <LineSizeOne>
          <text style={{ color: "#051367" }}>공공데이터 적용 분야</text>
        </LineSizeOne>
        <div
          style={{ width: "35%", height: "0.2vw", backgroundColor: "#5D8BF4" }}
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
      <LineSizeOne marginTop={"10vw"}>
        <text style={{ color: "#051367" }}>주목받는 스타트업의 공통점은? </text>
      </LineSizeOne>
      <LineSizeOne>
        <text>공공데이터와 융합한다는 것!</text>
      </LineSizeOne>
      <ContentsBoxContainer>
        <BlackBoxWrapper src={Companys}></BlackBoxWrapper>
      </ContentsBoxContainer>
      <LineSizeOne style={{ marginTop: "5vw" }}>
        <text style={{ color: "#2D31FA" }}>왜 Java와 Python인가요? </text>
      </LineSizeOne>
      <LineSizeOne style={{ marginTop: "4vw" }}>
        <text>개발자 수요가 제일 많은 분야는 </text>
      </LineSizeOne>
      <LineSizeOne style={{ marginBottom: "10vw" }}>
        <text>아직 ‘Java’입니다</text>
      </LineSizeOne>
      <LastContentsWrapper>
        <div
          style={{
            width: "43vw",
            height: "3vw",
            backgroundColor: "#DFF6FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6vw",
          }}
        >
          <LineSizeOne>
            <text style={{ color: "DFF6FF" }}>
              여러분의 취업준비는 안녕하십니까?
            </text>
          </LineSizeOne>
        </div>
        <LineSizeThree marginTop={"2vw"}>
          <text style={{ color: "white" }}>
            막연함의 끝, 완전한 확신의 준비
          </text>
        </LineSizeThree>
        <LineSizeThree>
          <text style={{ color: "#DFF6FF" }}>
            이제 똑똑하고 독하게 제대로 시작하세요!
          </text>
        </LineSizeThree>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "65vw",
            height: "11vw",
            marginTop: "2vw",
          }}
        >
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>FOCUS</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>취업까지 끝장내는</text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>개발자 취업 스터디</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>!!!!!!!</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>!!!!!!!!!!!!!!!!!1</text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>!!!!!!!</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>SECRET</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>단기간 취업 비결 공개</text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>면접 족보까지?</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
        </div>
      </LastContentsWrapper>
    </ContentsTwoContainer>
  );
};

export default ContentsTwo;
