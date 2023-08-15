import React from "react";
import { Header, ResidenciesWrapper, SliderButton } from "./Residencies.styles";
import { useGetAllResidencies } from "../../services/hooks/residencies.api.services";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import ResidencyCard from "./residency-card";
import Loader from "../shared/components/Loader";

const PopularResidencies = () => {
  const { data, isLoading, refetch } = useGetAllResidencies();

  const sliderSettings = {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      600: {
        slidesPerView: 2,
      },
      750: {
        slidesPerView: 3,
      },
      1100: {
        slidesPerView: 3,
      },
    },
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ResidenciesWrapper>
      <Header>
        <p>Best Choices</p>
        <p>Popular Residencies</p>
      </Header>
      <Swiper {...sliderSettings}>
        {/* Slider Button */}
        <SlideNextButton />
        {data?.slice(0, 6).map((item, Idx) => {
          return (
            <SwiperSlide key={Idx}>
              <ResidencyCard item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ResidenciesWrapper>
  );
};

export default PopularResidencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <SliderButton>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </SliderButton>
  );
};
