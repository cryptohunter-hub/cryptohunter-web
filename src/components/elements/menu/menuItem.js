import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";


const MenuItem = (props) =>{
    const {text,action,to,active,setActiveIndex,onClick,location
    }=props

    const clickAction = () =>{
        if(onClick){
            onClick()
        }
        setActiveIndex()
    }

 if(location?.pathname !== "/"){
    return(
        <MenuLink onClick={clickAction} target={action === "external" ? "_blank" : "_self"}>
        <MenuItemContainer active={active}>           
                    <MenuText>
                        {text}
                    </MenuText> 
                    {active && 
                 <MenuBottomLine/>
                 }         
        </MenuItemContainer>
        </MenuLink>
     )
 }
 if(action === "inpage"){
    return(
        <StyledAnchoreLink onClick={clickAction} href={to}>
            <MenuItemContainer active={active}>
             <MenuText>
                {text}
             </MenuText>
             {active && 
             <MenuBottomLine/>
             }
             
            </MenuItemContainer>
        </StyledAnchoreLink>
    )
 }
 return(
    <MenuLink onClick={clickAction} href={to} target={action === "external" ? "_blank" : "_self"}>
    <MenuItemContainer active={active}>           
                <MenuText>
                    {text}
                </MenuText> 
                {active && 
             <MenuBottomLine/>
             }         
    </MenuItemContainer>
    </MenuLink>
 )
}

const MenuItemContainer = styled.span`
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background: ${props=>props.active ? "var(--card-bg-gradient)" : "none"};
    position: relative;
    white-space: nowrap;
    @media (max-width:1282px) {
        max-width: 100%;
        width: 322px;
        height: 58px;
        border: 1px solid white;
        border-radius: 117.52px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`
const MenuLink = styled.a`
    height: 100%;
    text-decoration: none;
    @media (max-width:1282px) {
        height: 58px;
        margin-bottom: 12px;
    }
`
const MenuText = styled.span`
    font-size: 16px;
    font-weight: 500;
    color: var(--white);
    @media (max-width:1282px) {
        font-size: 18px;
        font-weight: 600;
    }
`
const StyledAnchoreLink = styled(AnchorLink)`
    text-decoration: none;
    height: 100%;
    @media (max-width:1282px) {
        height: 58px;
        margin-bottom: 12px;
    }
`
const MenuBottomLine = styled.span`
    width: 100%;
    height: 4px;
    background:linear-gradient(90.44deg, #A1AA8B 18.74%, #E3DFC4 67.57%);
    position: absolute;
    bottom: 0;
    left: 0;
    @media (max-width:1282px) {
      display: none;
    }

`
export default MenuItem