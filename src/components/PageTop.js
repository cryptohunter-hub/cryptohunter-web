import React from "react";
import styled, { keyframes } from "styled-components";
import AppstroreLogo from "../assets/img/appstorelogo.png";
import PlaystoreLogo from "../assets/img/playstorelogo.png";
import Image1 from "../assets/img/image1.png";
import Image2 from "../assets/img/image2.png";
import Image3 from "../assets/img/image3.png";
import Image4 from "../assets/img/image4.png";
import Image5 from "../assets/img/image5.png";
import Image6 from "../assets/img/image6.png";
import Image7 from "../assets/img/image7.png";
import Image8 from "../assets/img/image8.png";
import Image9 from "../assets/img/image9.png";
import Image10 from "../assets/img/image10.png";
import Image11 from "../assets/img/image11.png";
import Image12 from "../assets/img/image12.png";
import Image13 from "../assets/img/image13.png";
import Image14 from "../assets/img/image14.png";
import Image15 from "../assets/img/image15.png";
import Image16 from "../assets/img/image16.png";
import Image17 from "../assets/img/image17.png";
import Image18 from "../assets/img/image18.png";
import Image19 from "../assets/img/image19.png";

const PageTop = () => {
  return (
    <Container>
      <Col style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <Title>Discover the world of</Title>
        <SubTitle>Crtypto Hunter</SubTitle>
        <Desc>
        Discover CryptoHunter World, a groundbreaking blend of blockchain technology and outdoor adventure, where you can collect and battle Cryptids while earning rewards through real-world exploration and engagement.
        </Desc>
        <ButtonContainer>
          <StyledLink style={{ marginRight: "18px" }} href="#" >
            <StyledImage src={PlaystoreLogo} alt="Google Play Store" />
          </StyledLink>
          <StyledLink href="#" >
            <StyledImage src={AppstroreLogo} alt="Apple Play Store" />
          </StyledLink>
        </ButtonContainer>
      </Col>
      <Col style={{height:"700px"}}>
        <ImgContainer>
        <Column>
              <ImageList1>
                {imagesColumn1.map((src, index) => (
                  <ImageItem key={index} src={src} alt={`image-${index}`} />
                ))}

              </ImageList1>
            </Column>
            <Column>
              <ImageList2>
                {imagesColumn2.map((src, index) => (
                  <ImageItem key={index} src={src} alt={`image-${index}`} />
                ))}

              </ImageList2>
            </Column>
            <Column>
              <ImageList3>
                {imagesColumn3.map((src, index) => (
                  <ImageItem key={index} src={src} alt={`image-${index}`} />
                ))}
              </ImageList3>
            </Column>
        </ImgContainer>
      </Col>
    </Container>
  );
};
const scroll1 = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const scroll2 = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;

const scroll3 = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
`;
const Column = styled.div`
  width: 30%;
  height: 100%;
  overflow: hidden;
  position: relative;
  @media (max-width:992px) {
    width: 32%;
  }
`;

const ImageList1 = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${scroll1} 8s linear infinite;
`;

const ImageList2 = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${scroll2} 5s linear infinite;
`;

const ImageList3 = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${scroll3} 8s linear infinite;
`;

const ImageItem = styled.img`
  width: 100%;
  height: auto;
  margin: 10px 0;
   @media (max-width:1282px) {
    margin: 4px 0;
  } 
`;

const imagesColumn1 = [Image1, Image2,Image3, Image4, Image5,Image6];

const imagesColumn2 = [Image7, Image8, Image9,Image10,Image11,Image12];

const imagesColumn3 = [Image13, Image14,Image15,Image16,Image17,Image18,Image19];
const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  position: relative;
  flex-wrap: wrap-reverse;
  /* clip-path: polygon(
    0 0, 
    100% 0, 
    100% 100%, 
    95% 92%, 
    89% 94%, 
    83% 95%, 
    77% 95%, 
    70% 94%, 
    66% 92%, 
    60% 88%, 
    54% 83%, 
    50% 80%, 
    44% 75%, 
    25% 80%, 
    14% 100%, 
    28% 100%, 
    21% 100%, 
    14% 100%, 
    7% 100%, 
    0 100%
  ); */

`;
const Col = styled.div`
  width: calc(50% - 20px);
  overflow: hidden;
  @media (max-width:992px) {
    width: 100%;
  }
`;
const Title = styled.div`
  color: var(--white);
  font-size: 52px;
  @media (max-width:1282px) {
    font-size: 42px;
  }
  @media (max-width:992px) {
    margin-top: 42px;
    font-size: 32px;
  }
`;
const SubTitle = styled.div`
  background: var(--theme-base-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 52px;
  margin-bottom: 16px;
  @media (max-width:1282px) {
    font-size: 42px;
  }
  @media (max-width:992px) {
    font-size: 32px;
  }
`;
const Desc = styled.p`
  color: var(--primary-text-color);
  font-size: 18px;
  
  margin-block-start: 0;
  margin-block-end: 0;
  margin-bottom: 66px;
  @media (max-width:1282px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 44px;
  @media (max-width:992px) {
    margin-bottom: 24px;
  }
`;
const StyledImage = styled.img`
  cursor: pointer;
  width: 100%;
  max-width: 180px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  overflow: hidden;
  position: relative;
`;
export default PageTop;
