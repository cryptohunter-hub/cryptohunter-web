import React from "react";
import styled from "styled-components";
import NavLogoImg from "../../assets/img/navlogo.png";
import MobileLogoIcon from "../../assets/img/mobilelogo.png"

const NavLogo = () => {

    return(
      <>
              <Logo src={NavLogoImg} alt="cryptohunter logo" />
              <MobileLogo src={MobileLogoIcon}  alt="cryptohunter logo"/>
      </>
    )
}
const Logo = styled.img`
  width: 256px;
  cursor: pointer;
  @media (max-width:992px) {
    display: none;
  }
`
const MobileLogo = styled.img`
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  @media (max-width:992px) {
    display: block;
  }
`
export default NavLogo