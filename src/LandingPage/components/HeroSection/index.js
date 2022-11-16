import React, { useState } from "react";
import Image from '../../assets/background.png';

import {
  HeroContainer,
  HeroContent,
  HeroContentContainer,
  HeroH1,
  HeroP,
  HeroBg,
  VideoBg,
  ImageBg,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import MainSvg from "./MainSvg";
import '../InfoSection/styles.css'
const HeroSection = ({setSign}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImageBg src={Image} />
      </HeroBg>
      <HeroContentContainer>
        <HeroContent>
          <HeroH1>Making Laundry Easy at College</HeroH1>
          <HeroP>A sophisticated solution for a hassle-free laundry experience.</HeroP>
          <HeroBtnWrapper>
            <Button
              to="signup"
              onClick={() => setSign(true)}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Let's do laundry tonight! {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>

        </HeroContent>
        <HeroContent>

          <MainSvg />

        </HeroContent>
      </HeroContentContainer>
    </HeroContainer>
  );
};

export default HeroSection;