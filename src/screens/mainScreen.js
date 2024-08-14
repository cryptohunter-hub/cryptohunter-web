import React from "react";
import styled from "styled-components";
import Newsletter from "../components/newsletter";
import SocialConnections from "../components/socialConnections";
import Faq from "../components/faq";
import Blog from "../components/blog";
import RoadMap from "../components/roadmap";
import Project from "../components/ourproject";
import Cryptids from "../components/cryptids";
import PageTop from "../components/PageTop";
import BodyBackground from "../assets/img/bodybackground.png";

const MainScreen = () => {
    return(
        <MainPage>
            <PageTop/>
            <Cryptids/>
            <Project/>
            <RoadMap/>
            <Blog/>
            <Faq/>
            <SocialConnections/>
            <Newsletter/>
        </MainPage>
    )
}
const MainPage = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 107px;
    background-image: url(${BodyBackground});
    background-position: top;
    background-size: cover;
    @media (max-width:1282px) {
        padding: 0 82px;
    }
    @media (max-width:992px) {
        padding: 0 24px;
    }
`
export default MainScreen