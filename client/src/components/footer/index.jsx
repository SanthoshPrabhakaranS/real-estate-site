import React from "react";
import { FooterLayout, LeftContainer, RightContainer } from "./Footer.styles";
import Img from "../../assets/logo2.png";

const Footer = () => {
  return (
    <FooterLayout>
      <LeftContainer>
        <img src={Img} alt="logo" />
        <p>Our vision is to make all people the best place to live for them.</p>
      </LeftContainer>
      <RightContainer>
        <h1>Information</h1>
        <p>145 New York, FL 5467, USA</p>
      </RightContainer>
    </FooterLayout>
  );
};

export default Footer;
