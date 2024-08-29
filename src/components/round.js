import React from "react";
import styled from "styled-components";
import RoundCard from "./elements/roundCard";
// import { useWallet } from "../hooks/useWallet";
// import { useTonWallet } from '@tonconnect/ui-react';
// import { useTonAddress } from '@tonconnect/ui-react';

const Round = ({round}) => {
    // const wallet = useTonWallet();
    // const userFriendlyAddress = useTonAddress();
    // console.log(userFriendlyAddress)
    return(
        <Container>
            <Title>
                Round: {round}
            </Title>
            <RoundCard connected={false ? true : undefined} completed={undefined}/>
        </Container>
    )
}
const Container = styled.div`
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid #232323;
`
const Title = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 89px;
    color:#7BC175;
    font-size: 22px;
    font-weight: 600;

`
export default Round;