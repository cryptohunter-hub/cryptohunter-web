import React from "react";
import styled from "styled-components";
import BurgerIcon from "../assets/img/burgericon.png";
import CloseIcon from "../assets/img/burgercloseicon.png";
import MobileMenuLogo from "../assets/img/mobileMenuLogo.png";
import { MenuList } from "../constants";
import MenuItem from "./elements/menu/menuItem";
import GenericButton from "./elements/genericButton";

import { useState,useEffect } from "react";

const HamburgerMenu = (props) =>{
    const {activeIndex,setActiveIndex}=props
    const [isOpen,setIsOpen]=useState(false)
    const [animationClass,setAnimationClass]=useState("slide-in-right")

    const toggleMenu = () => {
        if(isOpen){
            setAnimationClass("slide-out-right")
            setTimeout(()=>{
                setIsOpen(false)
            },500)
        }else{
            setIsOpen(true)
            setAnimationClass("slide-in-right")
        }
    }
    useEffect(()=>{
        let isMobile = window.innerWidth < 1282
        if(!isMobile){
            setIsOpen(false)
        }
        window.addEventListener("resize",()=>{
            isMobile = window.innerWidth < 1282
            if(!isMobile){
                setIsOpen(false)
            }
        })
    },[])
    return(
        <HamburgerMenuContainer>
            <StyledBurgerIcon onClick={toggleMenu} src={BurgerIcon}/>
                <MenuContainer className={animationClass} isOpen={isOpen}>
                    <MenuHeader>
                    <CloseButton onClick={toggleMenu} src={CloseIcon}/>
                    </MenuHeader>
                    <MenuBody>
                        <MenuLogo src={MobileMenuLogo}/>
                        {
                            React.Children.toArray(
                                MenuList.map(i=>
                                    <MenuItem
                                    onClick={toggleMenu}
                                    setActiveIndex={()=>setActiveIndex(i.id)}
                                    active={activeIndex === i.id ? true : false} 
                                    to={i.to} 
                                    text={i.text}
                                    action={i.action}
                                    />
                                )
                            )
                        }
                   <GenericButton style={{width:"322px",displa:"flex",alignItems:"center",justifyContent:"center"}} text="Download" clickAction={()=>alert("will be ready soon")}/>
                    </MenuBody>
                </MenuContainer>           
        </HamburgerMenuContainer>
    )
}
const HamburgerMenuContainer = styled.div`
    display: none;
    @media (max-width: 1282px) {
        display: block;
    }
`
const StyledBurgerIcon = styled.img`
    cursor: pointer;
`
const MenuContainer = styled.div`
    position: fixed;
    z-index: 40;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.8);
    backdrop-filter: blur(40px);
    display: ${props => props.isOpen ? "block" : "none"};

`
const CloseButton = styled.img`
    cursor: pointer;
    margin: 2;
`

const MenuHeader = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 45px 55px;
    @media (max-width:932px) {
        padding: 37px 35px;
    }
`
const MenuBody = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MenuLogo = styled.img`
    padding: 16px;
    max-width: 100%;
`
export default HamburgerMenu;