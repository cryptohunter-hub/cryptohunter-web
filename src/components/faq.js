import React from "react";
import styled from "styled-components";
import FAQCard from "./elements/faqCard";
import { FAQData } from "../constants";

const Faq = () => {

    return(
        <FaqContainer id="faq">
            <TitleContainer>
                <Title>Frequently ASkED</Title>
                <SubTitle>Question</SubTitle>

            </TitleContainer>
            <FaqListContainer>
                    <FaqCol>
                        {React.Children.toArray(
                            FAQData.slice(0,3).map(i=>
                                <FAQCard question={i.question} answer={i.answer}/>
                            )
                        )}
                    </FaqCol>
                    <FaqCol>
                    {React.Children.toArray(
                            FAQData.slice(3,FAQData.length).map(i=>
                                <FAQCard question={i.question} answer={i.answer}/>
                            )
                        )}
                    </FaqCol>
                </FaqListContainer>
        </FaqContainer>
    )
}

export default Faq

const FaqContainer = styled.div`
    width: 100%;
    margin-bottom: 75px;
    @media (max-width:992px) {
        margin-bottom: 32px;
    }
`
const TitleContainer=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 53px;

`
const Title = styled.span`
    text-align: center;
    text-transform: uppercase;
    color: var(--white);
    font-size: 42px;
    font-weight: 700;
    @media (max-width:992px) {
        font-size: 18px;
    }
`
const SubTitle = styled.span`
    background: var(--theme-base-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 42px;
    font-weight: 700;
    text-transform: uppercase;
    @media (max-width:992px) {
        font-size: 18px;
    }
`
const FaqListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

`
const FaqCol = styled.div`
    width: calc(50% - 8px);
    @media (max-width:992px) {
        width: 100%;
    }
`