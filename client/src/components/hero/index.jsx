import React from "react";
import {
  Description,
  Footer,
  Header,
  HeroLayout,
  HeroWrapper,
  ImgContainer,
  LeftContainer,
} from "./Hero.styles";
import { SearchBarUI } from "../shared/components/Searchbar";
import CountUp from "react-countup";
import Img from "../../assets/hero-img.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  
  return (
    <HeroWrapper>
      <HeroLayout>
        {/* Left Side */}
        <LeftContainer>
          <Header>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              Discover <span></span> <br /> Most Suitable <br /> property
            </motion.h1>
          </Header>
          <Description>
            <p>
              Find a variety of properties that suit you very easily. <br />{" "}
              Forget all difficulties in finding a residence for you.
            </p>
          </Description>
          <SearchBarUI />
          <Footer>
            <div>
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <p>Premium Products</p>
            </div>
            <div>
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <p>Happy Customers</p>
            </div>
            <div>
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <p>Awards Won</p>
            </div>
          </Footer>
        </LeftContainer>
        {/* Right Side */}
        <ImgContainer>
          <motion.img
            initial={{ x: "2rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "ease-in" }}
            src={Img}
            alt="hero-img"
          />
        </ImgContainer>
      </HeroLayout>
    </HeroWrapper>
  );
};

export default Hero;
