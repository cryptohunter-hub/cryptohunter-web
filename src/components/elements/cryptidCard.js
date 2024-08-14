import React from "react";
import styled from "styled-components";

const CryptidCard = (props) => {
    const {image,icons,name} = props

    return (
        <Card>
            <CardImage src={image} alt={name}/>
            <Title>{name}</Title>
            <IconsContainer>
                {React.Children.toArray(
                    icons.map(i=>
                        <IconContainer>
                            <IconImg src={i}/>
                        </IconContainer>
                    )
                )}
            </IconsContainer>
        </Card>
    )
}
const Card = styled.div`
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 44px;
    background: linear-gradient(180deg, rgba(190, 190, 190, 0.16) 0%, rgba(55, 55, 55, 0) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* height: 427px; */
    position: relative;
    padding: 24px 32px;
    @media (max-width:992px) {
        padding: 16px 24px;

    }
`

const CardImage = styled.img`
     margin-bottom: 22px;
     max-width: 214px;
     height: 114px;
     @media (max-width:992px) {
        max-width:auto ;
        height: auto;
    }
`
const Title = styled.div`
    background: var(--theme-base-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 22px;
    text-align: center;
`
const IconsContainer= styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const IconContainer = styled.span`
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 50%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    margin: 4px;
`
const IconImg = styled.img`
    width: 32px;
`
export default CryptidCard;