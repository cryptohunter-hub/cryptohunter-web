import React from "react";
import styled from "styled-components";
import { SocialLinks } from "../constants";

const SocialConnections = () => {

    return(
        <SocialContainer>
            <Title>CONTACT & FOLLOW US</Title>
            <LinkContainer>
             {React.Children.toArray(
                SocialLinks.map(i=>
                <StyledLink href={i.link}>
                    <SocialItemCard>
                        <SocialIcon alt={i.alt} src={i.icon} />
                    </SocialItemCard>
                </StyledLink>
                )
             )}
            </LinkContainer>
        </SocialContainer>
    )

}
const SocialContainer = styled.div`
    width: 100%;
    margin-bottom: 87px;
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
const LinkContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const SocialItemCard = styled.div`
    width: 100%;
    height: 218px;
    border:1.84px solid rgba(255,255,255,0.1);
    border-radius: 29px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media (max-width:992px) {
        height: 78px;
        border-radius: 18px;
    }
`
const SocialIcon = styled.img`
    width: 52.86px;
    height: 52.86px;
    @media (max-width:992px) {
        width: 33.25px;
        height: 33.25px;
    }
`
const StyledLink = styled.a`
    text-decoration: none;
    width: calc(25% - 16px);
    @media (max-width:992px) {
        width: calc(25% - 8px);
    }

`

export default SocialConnections