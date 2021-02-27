import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  Heading,
  Btnwrap,
  Img,
  ImgWrapper,
} from "./infoElements";

const infoSection = ({
  lightBackground,
  id,
  imgStart,
  lightText,
  topLine,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  dark,
  primary,
  darkText,
}) => {
  return (
    <>
      <InfoContainer lightBackground={lightBackground} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Btnwrap>
                  <Button
                    to="discover"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-70}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    // dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </Btnwrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default infoSection;
