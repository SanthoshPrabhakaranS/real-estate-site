import React from "react";
import { CompaniesWrapper } from "./Companies.styles";
import CompImg1 from "../../assets/equinix.png";
import CompImg2 from "../../assets/prologis.png";
import CompImg3 from "../../assets/realty.png";
import CompImg4 from "../../assets/tower.png";

const companies = [CompImg1, CompImg2, CompImg3, CompImg4];

const Companies = () => {
  return (
    <CompaniesWrapper>
      {companies.map((item, Idx) => {
        return <img alt="company-img" src={item} key={Idx} />;
      })}
    </CompaniesWrapper>
  );
};

export default Companies;
