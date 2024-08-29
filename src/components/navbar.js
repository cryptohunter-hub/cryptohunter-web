import React from "react";
import styled from "styled-components";
import MenuItem from "./elements/menu/menuItem";
import {useContext } from "react";
import GenericButton from "./elements/genericButton";
import HamburgerMenu from "./hamburgerMenu";
import { MenuList } from "../constants";
import MenuContext from "../context/MenuContext";
import { useLocation,useNavigate} from "react-router-dom";


const Navbar = () => {
    const {activeIndex,setActiveIndex}=useContext(MenuContext)
    const location = useLocation()
    const navigate = useNavigate()
    const checkPath = (to) =>{
        if(location.pathname !== "/"){
            navigate("/")
            setTimeout(()=>{
                const element = document.querySelector(to);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
            },500)
        }
    }

    return(
        <NavbarContainer>
            <MenuContainer>
            {
                React.Children.toArray(
                    MenuList.map(i=>
                        <MenuItem
                        setActiveIndex={()=>setActiveIndex(i.id)}
                        active={activeIndex === i.id ? true : false} 
                        to={i.to} 
                        text={i.text}
                        action={i.action}
                        onClick={()=>checkPath(i.to)}
                        location={location}
                        />
                    )
                )
            }
            <GenericButton style={{marginLeft:"24px"}} text="Download" clickAction={()=>alert("will be readysoon")}/>
            </MenuContainer>
            <HamburgerMenu
            setActiveIndex={setActiveIndex}
            />
        </NavbarContainer>
    )

}

export default Navbar;

const NavbarContainer = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`
const MenuContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    @media (max-width: 1282px) {
        display: none;
    }
`