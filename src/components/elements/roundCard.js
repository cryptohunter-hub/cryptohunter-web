import React, { useEffect,useState}  from "react";
import styled from "styled-components";
import MetamaskIcon from "../../assets/img/metamaskIcon.svg";
import GenericButton from "./genericButton";
// import { useTonConnectModal } from '@tonconnect/ui-react';

const RoundCard = ({completed,connected}) => {
    const [buttonText,setButtonText] = useState("Connect")
    // const { state, open, close } = useTonConnectModal();
    
    const MintToken = () => {
        alert("selam")
    }

    useEffect(()=>{
        if(completed){
            setButtonText("Completed")
            return
        }
        if(connected){
            setButtonText("Mint")
            return
        }
        setButtonText("Connect")
    },[completed,connected])
    return(
        <Container completed={completed}>
            <ContainerLeft>
                <CardImage src={MetamaskIcon}  alt="metamask"/>
                <TitleContainer>
                    <Title>
                        Connect Wallet
                    </Title>
                    <SubTitle>
                    12h 57s 14s left
                    </SubTitle>
                </TitleContainer>
            </ContainerLeft>
            <GenericButton bordered={completed} text={buttonText} clickAction={connected ? MintToken : ()=>alert("connected")} />
        </Container>
    )
}


const Container = styled.div`
   width : 100%;
   height: 111px;
   border-radius: 35px;
   padding: 0 34px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-clip: padding-box, border-box;
   border:2px solid transparent ;
   background: ${props => props.completed ? "linear-gradient(180deg, #0F1207 0%, #0C2A09 100%),linear-gradient(180deg, #7CC870 0%, #3C6237 100%)" : "linear-gradient(180deg, rgba(190, 190, 190, 0.1456) 0%, rgba(190, 53, 57, 0) 100%),linear-gradient(168.33deg, rgba(255, 255, 255, 0.1) -4.46%, rgba(255, 255, 255, 0.1) 36.3%, rgba(81, 81, 81, 0.1) 68.42%, rgba(212, 212, 212, 0.1) 91.44%)"};
`
const ContainerLeft = styled.div`
   height:100%;
   display: flex;
   align-items: center;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;    
    margin-left: 39px;
    height: 100%;
    justify-content: center;
    align-items: flex-start;
`
const Title = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: white;
    margin-bottom: 5px;
`
const SubTitle = styled.div`
    color: #DEAB57;
    font-size: 14px;
    font-weight: 600;

`
const CardImage = styled.img`
    width: 59px;
    height: 49px;
    object-fit: contain;
`
export default RoundCard;
 
