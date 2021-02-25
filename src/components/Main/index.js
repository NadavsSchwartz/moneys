import React from "react";
import Video from "../../videos/video.mp4";
import { MainContainer, MainBackground, VideoBackground } from "./MainElements";

const MainSection = () => {
  return (
    <MainContainer>
      <MainBackground>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </MainBackground>
    </MainContainer>
  );
};

export default MainSection;
