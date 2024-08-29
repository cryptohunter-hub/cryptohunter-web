import React from "react";
import styled from "styled-components";

const EventDesciption = () => {

    return(
        <Container>
            <Title>
            Crypto industry is steering away from its course
            </Title>
            <ContainerTitle>
            CryptoHunter World Event :<br/>
            Free-Minting NFT & Airdrop
            </ContainerTitle>
            <DescContainer>
                <StyledP>
                In anticipation of the BETA Test launch of CryptoHunter World, we're excited to offer an exclusive event for all users who show interest in our game. This is your chance to receive limited-edition NFTs and in-game items before the official release.
                </StyledP>
                <StyledP>
                 Why Participate?<br/><br/>
                 Join the CryptoHunter World community and secure your limited-edition NFT, unlocking access to various future events and benefits. More perks for BETA limited-edition NFT holders will be announced, so stay tuned!
                </StyledP>
                <StyledP>
                Event Overviewbr <br/><br/>
                The CryptoHunter World Limited-Edition NFT Minting Event is divided into two rounds
                </StyledP>
                <StyledP>
                Round 1: <br/><br/>
                This round is open to all users. Simply complete a straightforward mission to claim your Round 1 limited-edition NFT, the ‘Cryptid’s Block.’ This NFT can later be exchanged for valuable in-game items in CryptoHunter World 
                </StyledP>
                <StyledP>
                Round 2:<br/><br/>
                In this round, users who clear a series of challenges will be granted minting rights and receive a BETA Cube NFT, which can be exchanged for the Genesis Shoes Box NFT and other rare items in CryptoHunter World  
                </StyledP>
            </DescContainer>
        </Container>
    )
}
const Container = styled.div`
    width:"100%";
`
const Title = styled.div`
    color:#DEAB57;
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 25px;
`
const ContainerTitle = styled.div`
    color: white;
    font-size: 36px;
    font-weight: 700;
    line-height: 55px;
`
const DescContainer = styled.div`
    margin-top: 26px;
    margin-bottom: 44px;
`
const StyledP = styled.p`
    color: white;
    font-size: 18px;
    font-weight: 400;
`
export default EventDesciption;
