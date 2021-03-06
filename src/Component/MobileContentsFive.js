import styled from "styled-components";
import "../styles/css/App.css";

import StudentFaceImageOne from "../Image/StudentFaceImage1.png";
import StudentFaceImageTwo from "../Image/StudentFaceImage2.png";
import StudentFaceImageThree from "../Image/StudentFaceImage3.png";
import StudentFaceImageFour from "../Image/StudentFaceImage4.png";
import StudentFaceImageFive from "../Image/StudentFaceImage5.png";
import StudentFaceImageSix from "../Image/StudentFaceImage6.png";

const ContentsFiveContainer = styled.div`
  width: 100%;
  height: 145vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #cecece;
`;

const LineSizeOne = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 8vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeTwo = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 4vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeThree = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFour = styled.div`
  font-family: "Pretendard-ExtraBold";
  font-size: 2.5vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const LineSizeFive = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 1vw;
  ${({ marginTop }) => {
    return marginTop ? `margin-top: ${marginTop}` : null;
  }}
`;

const WhiteBoxWrapper = styled.div`
  width: 40vw;
  height: 32vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 2vw;
`;

const ImageWrapper = styled.div`
  width: 12vw;
  height: 12vw;
  margin-top: 1vw;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;

  ${({ image }) => {
    return image ? `background-image: url(${image})` : null;
  }}
`;

const MobileContentsFive = () => {
  return (
    <ContentsFiveContainer>
      <LineSizeTwo marginTop={"7vw"}>
        ????????? ????????? ?????? ???????????? ???????????????
      </LineSizeTwo>
      <LineSizeOne>KGA ???????????? </LineSizeOne>
      <LineSizeOne>????????? ????????????</LineSizeOne>
      <div
        style={{
          width: "90vw",
          height: "35vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "8vw",
        }}
      >
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageFive}></ImageWrapper>
          <LineSizeThree>KGA ????????? ?????????</LineSizeThree>
          <LineSizeFour>VR ????????? ????????? ??????</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>??????????????? ????????? ????????? ?????? ?????????</LineSizeFive>
          <LineSizeFive>??????????????? ??????????????? ????????????.</LineSizeFive>
          <LineSizeFive>???????????? ??? ??? ?????????!</LineSizeFive>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageOne}></ImageWrapper>
          <LineSizeThree>KGA ????????? ?????????</LineSizeThree>
          <LineSizeFour>??????????????? ???????????? ????????? ??????</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>????????? ????????? ????????????</LineSizeFive>
          <LineSizeFive>
            ???????????? ???????????? ???????????? ????????? ????????? ??????
          </LineSizeFive>
          <LineSizeFive>????????? ???????????? ???????????? ????????????.</LineSizeFive>
        </WhiteBoxWrapper>
      </div>
      <div
        style={{
          width: "90vw",
          height: "35vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageTwo}></ImageWrapper>
          <LineSizeThree>KGA ????????? ?????????</LineSizeThree>
          <LineSizeFour>???????????? ????????? ????????? ??????</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>????????? ?????? ???????????????</LineSizeFive>
          <LineSizeFive>????????? ????????? ??? ?????????. ????????? </LineSizeFive>
          <LineSizeFive>
            ???????????? ?????? ??????????????? ???????????? ????????????.
          </LineSizeFive>
        </WhiteBoxWrapper>

        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageThree}></ImageWrapper>
          <LineSizeThree>KGA ????????? ?????????</LineSizeThree>
          <LineSizeFour>??????????????? ?????????????????? ??????</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>??????????????? ????????? ????????? ????????? ?????? ???</LineSizeFive>
          <LineSizeFive>????????? ???????????? ????????? ?????? ??????????????????</LineSizeFive>
          <LineSizeFive>??? ?????? ????????????.</LineSizeFive>
        </WhiteBoxWrapper>
      </div>
      <div
        style={{
          width: "90vw",
          height: "35vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "2vw",
        }}
      >
        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageSix}></ImageWrapper>
          <LineSizeThree>KGA ????????? ?????????</LineSizeThree>
          <LineSizeFour>????????? VR?????? ????????? ??????</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>????????? ???????????? ?????? ??????????????? ??????</LineSizeFive>
          <LineSizeFive>??????????????????. ??????????????? ??? ??? ?????????!</LineSizeFive>
          <LineSizeFive>??????????????? ????????? ???????????????.</LineSizeFive>
        </WhiteBoxWrapper>

        <WhiteBoxWrapper>
          <ImageWrapper image={StudentFaceImageFour}></ImageWrapper>
          <LineSizeThree>KGA ????????? ?????????</LineSizeThree>
          <LineSizeFour>????????? ?????????????????? ??????</LineSizeFour>
          <div
            style={{
              width: "90%",
              height: "0.1vw",
              backgroundColor: "#cecece",
              marginTop: "0.5vw",
              marginBottom: "1vw",
            }}
          ></div>
          <LineSizeFive>???????????? ?????? ?????? ?????????</LineSizeFive>
          <LineSizeFive>???????????? ?????? ????????? ?????? ?????????</LineSizeFive>
          <LineSizeFive>?????? ??? ????????? ????????????.</LineSizeFive>
        </WhiteBoxWrapper>
      </div>
    </ContentsFiveContainer>
  );
};

export default MobileContentsFive;
