import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";

export const HeroContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  height: 650px;
  position: relative;
  z-index: 1;
  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;

export const HeroBg = styled.div`
  opacity: 0.3;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`
export const ImageBg = styled.img`
  opacity: 1;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  ${'' /* background: #278EA5; */}
  
  animation:flow 4s 1s ease-in-out infinite alternate-reverse
  ;

  @keyframes flow{
    from{
      object-position:  -100px 0px;
      ${'' /* transform:scale(2); */}
      ${'' /* transform:translateX(-50px); */}
    }
    to{
      object-position: 300px 0px;

      ${'' /* transform:scale(1); */}

      object-fit: cover top right;
      ${'' /* transform:translateX(50px); */}

    }
  }

`
export const HeroContent = styled.div`
  z-index: 10;
  max-width: 500px;
  ${'' /* position: absolute; */}
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HeroContentContainer = styled.div`
  margin: auto;  
  margin-top: 150px;
  padding: 15px;
  padding-bottom: 30px;
  background: white;
  height: 65%;
  border-radius: 15px;
  opacity: 0.85;
  z-index: 8;
  width: 100%;
  ${'' /* position: absolute; */}
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

`;

export const HeroH1 = styled.h1`
  color: #1F4287;
  font-size: 48px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #1F4287;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  color: white !important;  
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;