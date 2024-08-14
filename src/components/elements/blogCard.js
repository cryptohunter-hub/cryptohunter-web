import React from "react";
import styled from "styled-components";

const BlogCard = (props)=>{
    const {title,date,link,image}=props

    return(
            <CardContainer onClick={()=>window.open(link,"_blank")}>
                <CardImage loading="lazy" src={image} alt="cryptohunter"/>
                <CardDate>{date}</CardDate>
                <CardTitle>{title}</CardTitle>
            </CardContainer>
        
    )
}

const CardContainer = styled.div`
    border: 2px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 16px 24px;
    width: 100%;
    cursor: pointer;
    min-height: 310px;
    @media (max-width:992px) {
        padding: 8px 12px;
        min-height: auto;
        min-height: 290px;
    }

`

const CardImage = styled.img`
    width: 100%;
     height: auto;
    border-radius: 24px;
    margin-bottom: 23px;
    min-height: 164px;
    @media (max-width:992px) {
        min-height: 144px;
    }

`
const CardDate = styled.div`
    color:var(--primary-text-color);
    font-size: 14px;
`
const CardTitle = styled.div`
    font-weight: 500;
    font-size: 16px;
    color: var(--white);
    margin-bottom: 4px;
    @media (max-width:992px) {
        font-size: 14px;
    }
`
export default BlogCard