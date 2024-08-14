import React from "react";
import styled from "styled-components";
import Navbar from "../navbar";
import NavLogo from "../elements/navLogo";


const Header = () => {
    return(
        <HeaderContainer>
            <NavLogo/>
            <Navbar/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
width: 100%;
height: 84px;
min-height: 84px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 107px;
background-color:var(--theme-black);
position: fixed;
top: 0;
left: 0;
right: 0;
backdrop-filter: blur(13px);
z-index: 1040;
@media (max-width: 1282px) {
        padding: 0 60px;
    }
@media (max-width: 992px) {
    height:114px;
    padding: 0 32px;
}
`

export default Header