import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  padding-top: 50px;
  margin-bottom: 0;
  background: ${({ lightBg }) => (lightBg ? "#ffffff" : "#010606")};
  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 300px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 25px;
  margin-top: 25px;
  padding: 0 24px;
  ${'' /* text-align: center; */}
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  text-align: center
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#1F4287" : "#1F4287")};
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  
  color: ${({ darkText }) => (darkText ? "#1F4287" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 1000px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const InfoH1 = styled.div`
  max-width: 440px;
  margin-top: 35px;
  font-size: 2.5rem;
  line-height: 24px;
  color:#000;
`;


export const InfoCusH1 = styled.h1`
  padding-top: 35px;
  padding-bottom: 35px;
  margin-bottom: 0;
  font-size: 2.5rem;
  font-weight: 600;
  background-color: #fff; 
  text-align: center; 
  color: #1f4287; 
`