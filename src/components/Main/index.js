import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from "../../videos/videos1.mp4";
import {
  MainContainer,
  MainBackground,
  VideoBackground,
  MainContent,
  MainH1,
  MainP,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./MainElements";

const MainSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <MainContainer id="home">
      <MainBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </MainBackground>
      <MainContent>
        <MainH1>With Moneys</MainH1>
        <MainP>The Sky's Not the Limit</MainP>

        <MainBtnWrapper>
          <Button
            to="about"
            onMouseLeave={onHover}
            onMouseEnter={onHover}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-70}
          >
            Get Started{hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
};

export default MainSection;
