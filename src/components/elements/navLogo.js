import React from "react";
import styled from "styled-components";
import NavLogoImg from "../../assets/img/navlogo.png";
import MobileLogoIcon from "../../assets/img/mobilelogo.png"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const NavLogo = () => {
  const location = useLocation()
    const goToTop = () =>{
      if(location.pathname === "/"){
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
    return(
      <Link onClick={goToTop} to="/">
              <Logo src={NavLogoImg} alt="cryptohunter logo" />
              <MobileLogo src={MobileLogoIcon}  alt="cryptohunter logo"/>
      </Link>
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