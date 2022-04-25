import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";
import Companys from "../Image/Companys.png";

import NewImageOne from "../Image/NewImageOne.png";
import NewImageTwo from "../Image/NewImageTwo.png";
import NewImageThree from "../Image/NewImageThree.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 350vw;
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
  font-family: "Pretendard-Regular";
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
  font-size: 2vw;
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
  font-size: 1vw;
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
  height: 45vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const LastContentsInnerBox = styled.div`
  width: 25vw;
  height: 100%;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewBackImage = styled.div`
  width: 40%;
  height: 90%;
  border: solid;
  border-radius: 2vw;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  ${({ src }) => {
    return src ? `background-image: url(${src})` : null;
  }}
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
          <text>공공기관이 생성하거나 관리하는 자료나 정보</text>
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
          <text>다양한 형태의 모든 자료 또는 정보를 일컫는다.</text>
        </div>
      </LineSizeOnePlus>

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
      <LineSizeOne style={{ marginTop: "3vw" }}>
        <text>공공데이터와 융합한다는 것!</text>
      </LineSizeOne>
      <ContentsBoxContainer>
        <BlackBoxWrapper src={Companys}></BlackBoxWrapper>
      </ContentsBoxContainer>

      <div
        style={{
          width: "100%",
          height: "25vw",
          backgroundColor: "#dff6ff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LineSizeOne style={{ marginTop: "2vw" }}>
          IT 취업의 전통 강자 KGA
        </LineSizeOne>
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
      </div>

      <LineSizeOne style={{ marginTop: "5vw" }}>
        <text style={{ color: "#2D31FA" }}>왜 Java와 Python인가요? </text>
      </LineSizeOne>
      <LineSizeOne style={{ marginTop: "4vw" }}>
        <text>개발자 수요가 제일 많은 분야는 </text>
      </LineSizeOne>
      <LineSizeOne style={{ marginBottom: "4vw" }}>
        <text>아직 ‘Java’입니다</text>
      </LineSizeOne>
      <LineSizeTwo>
        가장 많은 개발자 수요는 웹/앱 풀스택 개발과 빅데이터!
      </LineSizeTwo>
      <LineSizeTwo>
        국내 개발자 구인의 시작은 Java와 Python이었습니다.
      </LineSizeTwo>
      <LineSizeTwo style={{ marginBottom: "7vw" }}>
        공공사업 개발 시 사용하는 공공 프레임은 모두 자바로 구동됩니다.
      </LineSizeTwo>

      <div
        style={{
          width: "60vw",
          height: "22vw",
          backgroundColor: "#DFF6FF",
          marginBottom: "5vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "23vw",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            marginRight: "3.5vw",
          }}
        >
          <text
            style={{
              fontFamily: "Pretendard-Bold",
              fontSize: "3vw",
              marginTop: "2.5vw",
              color: "#105ee6",
            }}
          >
            JAVA
          </text>
          <text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: "1.4vw",
              marginTop: "2vw",
            }}
          >
            요새 개발자라면 자바 안 배우는 사람 없죠! 안드로이드 앱과 서버
            개발에 특히 많이 쓰이고, 틀이 잘 갖추어져 협업에 적합합니다.
            객체지향 프로그래밍을 추구하기 때문에 객체지향적 사고방식을 배울 수
            있다는 것도 장점입니다.
          </text>
        </div>

        <div
          style={{ height: "80%", width: "0.2vw", backgroundColor: "skyblue" }}
        ></div>
        <div
          style={{
            width: "23vw",
            height: "100%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "3.5vw",
          }}
        >
          <text
            style={{
              fontFamily: "Pretendard-Bold",
              fontSize: "3vw",
              marginTop: "2.5vw",
              color: "#105ee6",
            }}
          >
            PYTHON
          </text>
          <text
            style={{
              fontFamily: "Pretendard-Regular",
              fontSize: "1.3vw",
              marginTop: "2vw",
            }}
          >
            가장 쉬운 컴퓨터 언어 파이썬! 쉽고 강력한 기능으로 무장한 파이썬은
            최근 빅데이터 기술의 출현으로 인기를 얻게 되었어요. 타 언어에 비해
            간단하고 사람 친화적이어서 프로그래밍 지식이 없는 분들도 쉽게 시작할
            수 있답니다. 다양한 분야에서 쓰여 날로 인기가 많아지는 파이썬은 이제
            선택이 아닌 필수입니다.
          </text>
        </div>
      </div>

      <LastContentsWrapper>
        <div
          style={{
            width: "40vw",
            height: "3vw",
            backgroundColor: "#DFF6FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4vw",
          }}
        >
          <LineSizeOne>
            <text style={{ color: "DFF6FF" }}>
              당신을 위한 확실한 취업 솔루션
            </text>
          </LineSizeOne>
        </div>
        <LineSizeThree marginTop={"2vw"}>
          <text style={{ color: "white" }}>직전기수 취업률 72.2%</text>
        </LineSizeThree>
        <LineSizeThree>
          <text style={{ color: "#DFF6FF" }}>수강생 평균 만족도 88점</text>
        </LineSizeThree>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "55vw",
            height: "11vw",
            marginTop: "2vw",
          }}
        >
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>게임, 응용 SW 프로그래밍</text>
            </LineSizeFour>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>
                분야에 특화된 우수훈련기관
              </text>
            </LineSizeFour>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>현업 위주의 과정 설계</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>
                프로그래밍 언어 기초부터 현업에서 쓰이는 다양하고
              </text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>
                통합적인 개발 언어, 라이브러리, 프레임워크 훈련
              </text>
            </LineSizeSeven>
          </LastContentsInnerBox>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "55vw",
            height: "11vw",
            marginTop: "2vw",
          }}
        >
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>
                담임제 운영으로 학생 집중관리
              </text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>
                보충학습 지도, 개인상담으로
              </text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>동기부여 및 자존감 향상</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
          <LastContentsInnerBox>
            <LineSizeFour>
              <text style={{ color: "#101010" }}>
                체계화된 취업 지원 프로세스
              </text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>
                일별, 주차별 업체 지원, 면접, 취업 현황 추적을
              </text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>통한 체계적인 관리</text>
            </LineSizeSeven>
          </LastContentsInnerBox>
        </div>
      </LastContentsWrapper>
      <LineSizeOne style={{ marginTop: "10vw", color: "#051367" }}>
        KGA에서 자바/파이썬을 배워야하는 이유?
      </LineSizeOne>
      <LineSizeTwo style={{ marginTop: "3vw" }}>
        각종 공공데이터를 활용한 앱/웹 서비스 개발을 배웁니다.
      </LineSizeTwo>
      <LineSizeTwo style={{}}>
        디지털 기술을 기반으로 다양한 기기와 네트워크, 콘텐츠의 융합을 통해
      </LineSizeTwo>
      <LineSizeTwo style={{}}>
        새로운 형태의 제품과 서비스를 창출합니다.
      </LineSizeTwo>
      <LineSizeTwo style={{}}>
        기기·네트워크·콘텐츠를 기획하고, 설계하고, 제작하고, 운용합니다.
      </LineSizeTwo>
      <LineSizeTwo style={{}}>
        웹/앱을 연동하고, 공공데이터-민간 데이터의 융합 SW를 개발합니다.
      </LineSizeTwo>
      <div
        style={{
          width: "80%",
          height: "60vw",

          marginTop: "10vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "33%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <NewBackImage src={NewImageOne}></NewBackImage>
          <div
            style={{
              width: "40%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <text style={{ fontFamily: "Pretendard-Bold", fontSize: "2vw" }}>
              1. 누구보다 빠르고 쉽게,
            </text>
            <text
              style={{
                fontFamily: "Pretendard-Bold",
                fontSize: "2vw",
                marginLeft: "1.9vw",
              }}
            >
              공공데이터 개발자가 되세요
            </text>
            <text style={{ marginTop: "1.5vw", fontSize: "1.5vw" }}>
              -비전공자, 코딩 초보를 위한 커리큘럼으로 코딩에 대한 이해를 돕고
              아이디어 구축 및 적용 시간을 절약합니다.
            </text>
            <text style={{ fontSize: "1.5vw" }}>
              -대학에서 2년간 배우는 과정을 7개월로 압축! 커리어 전환이
              비약적으로 빨라집니다.
            </text>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "33%",

            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <NewBackImage src={NewImageTwo}></NewBackImage>
          <div
            style={{
              width: "40%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <text style={{ fontFamily: "Pretendard-Bold", fontSize: "2vw" }}>
              2. 효율적으로 준비하세요
            </text>
            <text style={{ marginTop: "1vw", fontSize: "1.5vw" }}>
              -과정 수료 전부터 취업 연계가 진행되며, 공부와 취업 동시 준비가
              가능합니다.
            </text>
            <text style={{ fontSize: "1.5vw" }}>
              -현업자들이 실제 사용하는 툴을 사용해 미리 실무에 익숙해질 수
              있습니다.
            </text>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "33%",

            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <NewBackImage src={NewImageThree}></NewBackImage>
          <div
            style={{
              width: "40%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <text style={{ fontFamily: "Pretendard-Bold", fontSize: "2vw" }}>
              3. 생산성 극대화, KGA가 이뤄드려요
            </text>
            <text style={{ marginTop: "1vw", fontSize: "1.5vw" }}>
              -다양한 개발 환경을 구축할 수 있습니다
            </text>
            <text style={{ fontSize: "1.5vw" }}>
              -KGA를 통해 커리어 쌓기의 시간은 줄이고 효율은 높여 보세요.
            </text>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          height: "0.2vw",
          backgroundColor: "#5D8BF4",
          marginTop: "5vw",
        }}
      ></div>
    </ContentsTwoContainer>
  );
};

export default ContentsTwo;
