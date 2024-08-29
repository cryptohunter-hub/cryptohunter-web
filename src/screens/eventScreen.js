import React from "react";
import styled from "styled-components";
import BodyBackground from "../assets/img/bodybackground.png";
import Newsletter from "../components/newsletter";
import SocialConnections from "../components/socialConnections";
// import ConnectTonWalletButton from "../components/elements/connectTONWallet";
import EventDesciption from "../components/eventDescription";
import Round from "../components/round";

const EventScreen = () =>{

 return(
    <PageContainer>
        <WalletButtonContainer>
           {/* <ConnectTonWalletButton/> */}
        </WalletButtonContainer>
        <EventDesciption/> 
        <Round round={1}/>      
        <SocialConnections/>
        <Newsletter/>
    </PageContainer>
 )
}

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 107px;
    background-image: url(${BodyBackground});
    background-position: top;
    background-size: cover;
    @media (max-width:1282px) {
        padding: 0 82px;
    }
    @media (max-width:992px) {
        padding: 0 24px;
    }
`
const WalletButtonContainer = styled.div`
    width: 100%;
    height: 113px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
export default EventScreen;