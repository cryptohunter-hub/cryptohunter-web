import React from "react";
import styled from "styled-components";
import ProjectImage from "../assets/img/projectImg.png";

const Project = () => {
  return (
    <ProjectContainer id="project">
      <Slogan>
      Begin earning from your daily steps now—it's never too late to start your rewarding journey!
      </Slogan>
      <SubContainer>
        <Col>
          <ProjectTitle>What is our</ProjectTitle>
          <ProjectSubTitle>Project?</ProjectSubTitle>
          <Projectdesc>
          CryptoHunter World is the world's first service that combines GPS-based Play to Earn (P2E) and Move to Earn (M2E) mechanisms. CryptoHunter World is a blockchain-based collectible RPG Move to Play service that allows users to embark on an adventure with various Cryptids and earn rewards through interaction and battle. Users can encounter, collect, and battle Cryptids during their outdoor activities, promoting both engagement and physical movement through an innovative reward system.
          </Projectdesc>
        </Col>
        <Col>
          <StyledImg src={ProjectImage} alt="cryptohunter app" />
        </Col>
      </SubContainer>
    </ProjectContainer>
  );
};
const ProjectContainer = styled.div`
  width: 100%;
`;
const Slogan = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 75px;
  background: var(--theme-base-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 38px;
  @media (max-width:992px) {
    font-size: 18px;
    margin-bottom: 44px;
  }
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const Col = styled.div`
  /* display: flex; */
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width:992px) {
    width: 100%;
  }
`;
const StyledImg = styled.img`
  width: 100%;
`;
const ProjectTitle = styled.div`
  font-size: 66px;
  margin-bottom: 4px;
  color: var(--white);
  line-height: 1;
  @media (max-width:992px) {
    text-align: center;
    font-size: 44px;
  }
`;
const ProjectSubTitle = styled.div`
  background: var(--theme-base-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 66px;
  line-height: 1.2;
  margin-bottom: 32px;
  @media (max-width:992px) {
    text-align: center;
    font-size: 44px;
    margin-bottom: 24px;
  }
  
`;
const Projectdesc = styled.p`
  font-size: 18px;
  color: var(--primary-text-color);
  margin-block-end: 0;
  margin-block-start: 0;
  @media (max-width:992px) {
    text-align: center;
    font-size: 16px;
  }
`;
export default Project;
