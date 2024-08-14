import React from "react";
import styled from "styled-components";
import { BlogData } from "../constants";
import GenericButton from "./elements/genericButton";
import BlogCard from "./elements/blogCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode} from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';


const Blog = () => {

    return(
        <BlogContainer id="blog">
            <Title>Blog</Title>
            <Desc>Stay ahead with new updates. Be the first to know about our latest blog posts, trends, and innovations to ensure you never miss an important development</Desc>
            <BlogCardsContainer>
                        <Swiper
                        slidesPerView={1.5}
                        spaceBetween={16}
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
                              slidesPerView: 4,
                              spaceBetween: 24,
                            },
                          }}
                        loop={true}
                        modules={[FreeMode]}
                        className="blogSlider"
                        >
                    {React.Children.toArray(
                        BlogData.map(i=>
                            <SwiperSlide>
                                <BlogCard 
                                link={i.link} 
                                date={i.date}
                                title={i.title}
                                image={i.image}
                                />
                            </SwiperSlide>
                        )
                    )}
                    </Swiper>

            </BlogCardsContainer>
            <ButtonContainer>
            <GenericButton  clickAction={()=>window.open('https://medium.com/@cryptohunterworld', '_blank')} text="View All"/>
            </ButtonContainer>
        </BlogContainer>
    )
}
const BlogContainer = styled.div`
    width: 100%;
    margin-bottom: 109px;
    @media (max-width:992px) {
        margin-bottom: 44px;
    }
`
const Title = styled.h2`
    color: var(--white);
    font-size: 52px;
    font-weight: 400;
    margin-bottom: 44px;
    margin-block-start: 0;
    margin-block-end: 0;
    @media (max-width:992px) {
    text-align: center;
    font-size: 44px;
  }
`
const Desc=styled.p`
    color: var(--primary-text-color);
    font-size: 18px;
    @media (max-width:992px) {
    text-align: center;
    font-size: 16px;
  }
`
const BlogCardsContainer = styled.div`
    width: 100%;
    margin-top: 34px;
    margin-bottom: 58px;
`
const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
export default Blog