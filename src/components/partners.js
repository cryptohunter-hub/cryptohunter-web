import React from "react";
import styled from "styled-components";
import { PartnersData } from "../constants";

const Partners = () => {

    return(
        <Container id="partners">
            <Title>Backers & Partners</Title>
            <PartnerListContainer>
                {React.Children.toArray(
                    PartnersData.map(p=>

                        <PartnerCard target="_blank" href={p.uri}>
                                <ParnerImg src={p.image} alt={p.name}/>
                        </PartnerCard>
                    )
                )}
            </PartnerListContainer>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;

`
const PartnerListContainer = styled.div`
    display: grid;
    width: 100%;
    gap: 8px;
    grid-template-columns: auto auto auto auto;
    justify-items: center;
    @media (max-width:1292px) {
        grid-template-columns: auto auto auto;
    }
    @media (max-width:992px) {
        grid-template-columns: auto auto;
    }
    @media (max-width:640px) {
        grid-template-columns: auto;
    }
`
const PartnerCard = styled.a`
    width: 100%;
    height: 180px;
    border:1.84px solid rgba(255,255,255,0.1);
    border-radius: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    padding: 24px 32px;
    margin: auto;
    @media (max-width:992px) {
        border-radius: 18px;
    }
`
const ParnerImg=styled.img`
    width: 100%;
    max-width: 240px;
`
const Title = styled.h2`
    text-transform: uppercase;
    background: var(--theme-base-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 34px;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
    @media (max-width:992px) {
        font-size: 18px;
    }
`
export default Partners

