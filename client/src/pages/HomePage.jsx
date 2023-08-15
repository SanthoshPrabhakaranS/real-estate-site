import React from "react";
import Hero from "../components/hero";
import Companies from "../components/companies";
import { AppWrapper } from "./HomePage.styles";
import PopularResidencies from "../components/popular-residencies";
import OurValue from "../components/our-value";
import GetStarted from "../components/get-started";

const HomePage = () => {
  return (
    <AppWrapper>
      <div>
        <Hero />
      </div>
      <Companies />
      <PopularResidencies />
      <OurValue />
      <GetStarted />
    </AppWrapper>
  );
};

export default HomePage;
