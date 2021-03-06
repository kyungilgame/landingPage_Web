import styled from "styled-components";
import "../styles/css/App.css";

import Logo from "../Image/logo.png";
import MinistryImage from "../Image/MinistryImage.png";
import ShortLine from "../Image/ShortLine.png";
import LongLine from "../Image/LongLine.png";

const ContentsTwoContainer = styled.div`
  width: 100%;
  height: 250vw;
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
  font-size: 4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeSix = styled.div`
  font-family: "Pretendard-Light";
  font-size: 2.5vw;
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
  background-size: 16vw 0.8vw;
  background-image: url(${LongLine});
  background-position: right 50% bottom 77%;
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
        <text style={{ color: "#051367" }}>???????????????????</text>
      </LineSizeOne>
      <LineSizeTwo marginTop={"3vw"}>
        <text>??????????????? ??????????????? ???????????? ????????? ??????</text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text>????????? ????????? ???????????? ????????????</text>
      </LineSizeTwo>
      <LineSizeTwo>
        <text>????????? ????????? ?????? ?????? ?????? ????????? ????????????.</text>
      </LineSizeTwo>

      <MiddleLineContainer>
        <div
          style={{ width: "20%", height: "0.5vw", backgroundColor: "#5D8BF4" }}
        ></div>
        <LineSizeOne>
          <text style={{ color: "#051367" }}>??????????????? ?????? ??????</text>
        </LineSizeOne>
        <div
          style={{ width: "20%", height: "0.5vw", backgroundColor: "#5D8BF4" }}
        ></div>
      </MiddleLineContainer>
      <GreenBoxContainer>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"2vw"}>??????/??????</LineSizeFive>

          <LineSizeSix marginTop={"2vw"}>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>??????</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"2vw"}>??????/??????</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"2vw"}>??????/??????</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>??????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>

        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"2vw"}>??????/??????</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
        <GreenBoxWrapperOne>
          <LineSizeFive marginTop={"2vw"}>??????/??????</LineSizeFive>
          <LineSizeSix marginTop={"2vw"}>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
          <LineSizeSix>
            <text>????????????</text>
          </LineSizeSix>
        </GreenBoxWrapperOne>
      </GreenBoxContainer>
      <div
        style={{
          width: "100%",
          height: "40vw",
          backgroundColor: "#dff6ff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10vw",
        }}
      >
        {" "}
        <LineSizeOne marginTop={"5vw"}>IT ????????? ?????? ?????? KGA</LineSizeOne>
        <LineSizeOne>
          <text style={{ color: "#051367" }}>?????? ???????????????!????</text>
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
      </div>
    </ContentsTwoContainer>
  );
};

export default MobileContentsTwo;
