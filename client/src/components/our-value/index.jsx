import React, { useState } from "react";
import {
  Header,
  ImgContainer,
  OurValueLayout,
  OurValueWrapper,
  RightContainer,
} from "./OurValue.styles";
import Img from "../../assets/value.jpg";
import data from "./accordianData";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "../../index.css";

const OurValue = () => {
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <OurValueWrapper>
      <OurValueLayout>
        {/* Left Side */}
        <ImgContainer>
          <img src={Img} alt="hero-img" />
        </ImgContainer>
        {/* Right Side */}
        <RightContainer>
          <Header>
            <h1>Our Value</h1>
            <p>Value we give to you</p>
            <p>
              We always ready to help by providing the best services for you. We
              beleive a good blace to live can make your life better
            </p>
          </Header>
          <div>
            <Accordion className="accordian">
              {data.map((item, Idx) => {
                return (
                  <AccordionItem
                    onClick={() => setCurrIndex(Idx)}
                    uuid={Idx}
                    className="accordian-item"
                    key={Idx}
                    style={{
                      boxShadow:
                        currIndex === Idx
                          ? "0px 23px 21px -8px rgba(136, 160, 255, 0.25)"
                          : null,
                    }}
                  >
                    <AccordionItemHeading>
                      <AccordionItemButton className="accordian-btn">
                        <span className="icon">{item.icon}</span>
                        {item.heading}
                        <MdOutlineArrowDropDown className="icon" color="#000" size={"40"} />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className="desc">{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </RightContainer>
      </OurValueLayout>
    </OurValueWrapper>
  );
};

export default OurValue;
