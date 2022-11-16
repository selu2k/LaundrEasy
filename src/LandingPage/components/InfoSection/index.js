import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  Heading,
  Subtitle,
  Column2,
  Img,
  ImgWrap,
  //InfoH1

} from "./InfoElements";
//import { Button } from "../ButtonElements";

import './styles.css';




const InfoSection = ({
  lightBg,
  id,
  imgStart,
  lightText,
  darkText,
  description,
  headline,
  //buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                {/* <TopLine>{topLine}</TopLine> */}
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                {img}
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;