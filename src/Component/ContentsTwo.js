import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 160vw;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 25vw;
  margin-top: 5vw;
`;

const GreenBoxWrapperOne = styled.div`
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
  background-size: 6vw 1.5vw;
  background-image: url(${ShortLine});
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
  width: 26vw;
  height: 6vw;
  background-color: #101010;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        <text style={{ color: "#0d7377" }}>왜, 메타버스인가요?🤔</text>
      </LineSizeOne>
      <LineSizeOnePlus marginTop={"3vw"}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <text>넷마블 메타버스엔터테인먼트, 카카오엔터와 파트너십 구축</text>
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
          <text>
            [단독] 넥슨도 '메타버스 스튜디오' 가세…YG·네이버 합작사에 150억 투자
          </text>
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
          <text>블리자드 인수한 MS, 종착점은 '메타버스'</text>
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
          <text>엔씨소프트, 新 전성기 위한 '메타버스' 세계 구축 박차</text>
        </div>
      </LineSizeOnePlus>
      <LineSizeOne marginTop={"4vw"}>
        게임 업계의 전통 강자, 검증된 명가 KGA
      </LineSizeOne>
      <LineSizeOne>
        <text style={{ color: "#0d7377" }}>
          최고의 게임 기획자로 만들어 드립니다. 믿고 따라오세요!🚀
        </text>
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
          style={{ width: "30%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
        <LineSizeOne>
          <text>메타버스의 </text>
          <text style={{ color: "#0d7377" }}>초월적 범용성!</text>
        </LineSizeOne>
        <div
          style={{ width: "30%", height: "0.2vw", backgroundColor: "#101010" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"5vw"}>게임</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>실감 기술을 통해</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>몰입감이 극대화되는</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>게임 컨텐츠 제작</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>대체/확장/초월 자아</LineSizeFive>
          <LineSizeSix marginTop={"3vw"}>
            <text>아바타를 통해 </text>
          </LineSizeSix>
          <LineSizeSix>
            <text>현실의 경험을 확장하고,</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>시공간의 제약을 넘어</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>협업과 소통</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
        <GreenBoxWrapperTwo>
          <LineSizeFive marginTop={"5vw"}>블록체인과 NFT</LineSizeFive>

          <LineSizeSix marginTop={"3vw"}>
            <text>디지털 자산의 생산과 유통,</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>플랫폼 간 상호 연동의 형태로 진화</text>
          </LineSizeSix>
        </GreenBoxWrapperTwo>
      </GreenBoxContainer>
      <LineSizeOne marginTop={"10vw"}>
        <text style={{ color: "#0d7377" }}>누가 들으면 좋나요?</text>
      </LineSizeOne>
      <LineSizeOne>
        <text>재미있는 일을 하고 싶은 사람!</text>
      </LineSizeOne>
      <ContentsBoxContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "55vw",
            justifyContent: "space-around",
          }}
        >
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                매력적인 세계관을 구축하는 브랜드 마케터
              </text>
            </LineSizeTwo>
          </BlackBoxWrapper>
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                스토리 기반의 미디어 컨텐츠 기획자
              </text>
            </LineSizeTwo>
          </BlackBoxWrapper>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "55vw",
            justifyContent: "space-around",
            marginTop: "2vw",
          }}
        >
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                게임, 영화, 시각효과, 확장현실,
              </text>
            </LineSizeTwo>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                테마파크의 실감형 컨텐츠 기획자
              </text>
            </LineSizeTwo>
          </BlackBoxWrapper>
          <BlackBoxWrapper>
            <LineSizeTwo>
              <text style={{ color: "#00ffd6" }}>
                온오프라인 컨텐츠를 결합하는 NFT 기획자
              </text>
            </LineSizeTwo>
          </BlackBoxWrapper>
        </div>
      </ContentsBoxContainer>
      <LastContentsWrapper>
        <div
          style={{
            width: "43vw",
            height: "3vw",
            backgroundColor: "#00ffd6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "6vw",
          }}
        >
          <LineSizeOne>
            <text style={{ color: "black" }}>
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
          <text style={{ color: "#00ffd6" }}>
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
              <text style={{ color: "#101010" }}>TREND</text>
            </LineSizeFour>
            <LineSizeSeven marginTop={"1vw"}>
              <text style={{ color: "#101010" }}>
                2022년 가장 트렌디한 기술
              </text>
            </LineSizeSeven>
            <LineSizeSeven>
              <text style={{ color: "#101010" }}>'메타버스'</text>
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
