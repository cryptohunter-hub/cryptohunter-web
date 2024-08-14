import React from "react";
import styled from "styled-components";
import { CryptidsData } from "../constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import CryptidCard from "./elements/cryptidCard";
import { FreeMode,Pagination} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Cryptids = () => {

    return(
        <CryptidsContainer id="cryptids">
            <Title>Cryptids</Title>
                    <Swiper
                        slidesPerView={1.5}
                        spaceBetween={16}
                        loop={true}
                        pagination={true}
                        modules={[FreeMode,Pagination]}
                        breakpoints={{
                            640: {
                              slidesPerView: 2,
                              spaceBetween: 8,
                            },
                            768: {
                              slidesPerView: 3,
                              spaceBetween: 16,
                            },
                            1024: {
                              slidesPerView: 5,
                              spaceBetween: 24,
                            },
                          }}
                        className="blogSlider"
                        >
                    {React.Children.toArray(
                        CryptidsData.map(i=>
                            <SwiperSlide>
                                <CryptidCard 
                                   icons={i.icons} 
                                    name={i.name} 
                                    image={i.image}/>
                            </SwiperSlide>
                        )
                    )}
                    </Swiper>
        </CryptidsContainer>
    )

}
const CryptidsContainer = styled.div`
    width: 100%;
    margin-bottom: 114px;
    margin-top: 84px;
    @media (max-width:992px) {
        margin-bottom: 52px;
    }
`
const Title = styled.h2`
    margin-block-end: 0;
    margin-block-start: 0;
    margin-bottom: 21px;
    background: var(--theme-base-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
`

export default Cryptids