import React from "react";
import styled from "styled-components";
import { SocialLinks, MenuList } from "../../constants";
import MailIcon from "../../assets/social/mailIcon.png";
import AppstroreLogo from "../../assets/img/appstorelogo.png";
import PlaystoreLogo from "../../assets/img/playstorelogo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";
import MenuContext from "../context/MenuContext";


const Footer = () => {
    const {setActiveIndex}=useContext(MenuContext)

    return(
        <FooterContainer>
            <FooterTop>
                <Section>
                    <SectionTitle>CRYPTO HUNTER</SectionTitle>
                    <FlexContainer>
                    <MenuContainer>
                        {React.Children.toArray(
                            MenuList.slice(0,3).map(i=>{
                                if(i.action ==="inpage"){
                                    return(
                                    <StyledAnchorLink href={i.to} onClick={()=>setActiveIndex(i.id)} target={i.action === "external" ? "_blank" : "_self"}>
                                        <MenuItem>{i.text}</MenuItem>
                                    </StyledAnchorLink>
                                    )
                                }
                                return(
                                    <StyledLink href={i.to} onClick={()=>setActiveIndex(i.id)} target={i.action === "external" ? "_blank" : "_self"}>
                                        <MenuItem>{i.text}</MenuItem>
                                    </StyledLink>
                                    )
                            }                                
                            )
                        )}
                    </MenuContainer>
                    <MenuContainer>
                        {React.Children.toArray(
                            MenuList.slice(3,MenuList.length).map(i=>
                                {
                                    if(i.action ==="inpage"){
                                        return(
                                        <StyledAnchorLink href={i.to} onClick={()=>setActiveIndex(i.id)} target={i.action === "external" ? "_blank" : "_self"}>
                                            <MenuItem>{i.text}</MenuItem>
                                        </StyledAnchorLink>
                                        )
                                    }
                                    return(
                                        <StyledLink href={i.to} onClick={()=>setActiveIndex(i.id)} target={i.action === "external" ? "_blank" : "_self"}>
                                            <MenuItem>{i.text}</MenuItem>
                                        </StyledLink>
                                        )
                                } 
                                
                            )
                        )}
                    </MenuContainer>
                    </FlexContainer>
                </Section>
                <Section>
                    <SectionTitle>DOWNLOAD</SectionTitle>
                    <StoreContainer>
                            <StyledLink style={{marginRight:"16px"}} href="#" >
                                <StyledImage src={PlaystoreLogo} alt="Google Play Store"/>
                            </StyledLink>
                            <StyledLink href="#" >
                                <StyledImage src={AppstroreLogo} alt="Google Play Store"/>
                            </StyledLink>
                    </StoreContainer>
                </Section>
                <Section>
                    <SectionTitle>CONTACT</SectionTitle>
                    <ContactContainer>
                        <StyledLink href="mailto:contact@cryptohunter.world">
                          <StyledMailIcon src={MailIcon} alt="email"/>                       
                          <ContactText>contact@cryptohunter.world</ContactText>  
                        </StyledLink>                     
                    </ContactContainer>

                </Section>
                <Section>
                    <SectionTitle>FOLLOW US</SectionTitle>
                    <FollowText>Get the latest updates, trends, and insights. Subscribe now!</FollowText>
                    <SocialContainer>
                        {React.Children.toArray(
                            SocialLinks.map(i=>
                                <StyledLink href={i.link} target="_blank">
                                    <SocialIcon src={i.icon2} alt={i.alt}/>
                                </StyledLink>
                            )
                        )}
                    </SocialContainer>
                </Section>
            </FooterTop>
            <FooterBottom>
                <FooterText>©️ 2024 CryptoHunter World. All Rights Reserved.</FooterText>
            </FooterBottom>
        </FooterContainer>
    )
}
const FooterContainer = styled.div`
  width: 100%;
`
const FooterTop = styled.div`
   width:100%;
   border-top: 1px solid #212121;
   border-bottom: 1px solid #212121;
   padding: 60px 106px;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;

    @media (max-width:992px) {
        padding: 32px 24px;
    }
`
const FooterBottom = styled.div`
   display: flex;
   padding: 35px 106px;
   @media (max-width:992px) {
        padding: 32px 24px;
        text-align: center;
        display: flex;
        justify-content: center;
    }
`
const FooterText = styled.span`
    background: var(--theme-base-gradient);
    font-size: 14px;
    font-weight: 500;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width:992px) {
        text-align: center;
    }
`
const Section = styled.div`
    width: calc(25% - 8px);
    @media (max-width:1282px) {
        width: calc(50% - 8px);
    }
    @media (max-width:992px) {
        width: 100%;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        margin-bottom: 24px;
        padding-bottom: 24px;
    }
`
const SectionTitle = styled.div`
    text-align: left;
    text-transform: uppercase;
    color:#656565;
    font-size:18px;
    font-weight: 500;
    margin-bottom: 24px;
    @media (max-width:1282px) {
        text-align: center;
    }
`
const FollowText = styled.div`
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 45px;
    color: var(--white);
    @media (max-width:1282px) {
        text-align: center;
    }
`
const SocialContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    @media (max-width:1282px) {
        justify-content:center;
    }
`
const SocialIcon = styled.img`
    cursor: pointer;
   
    object-fit: contain;


`
const StyledLink = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    &:last-child {
    margin-right: 0;
  }
`
const ContactContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width:1282px) {
        justify-content:center;
    }
`
const StyledMailIcon = styled.img`
     margin-right: 16px ;
`
const ContactText = styled.span`
    font-size: 14px;
    font-weight: 500;
    color: var(--white);
`
const StyledImage = styled.img`
    cursor: pointer;
    width: 100%;
    max-width: 180px;
`
const StoreContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
`
const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start,;
    align-items: flex-start;
    @media (max-width: 992px) {
        align-items: center;
    }

`
const MenuItem = styled.div`
    color: var(--white);
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: left;
    cursor: pointer;
`
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const StyledAnchorLink = styled(AnchorLink)`
    text-decoration: none;
`
export default Footer
