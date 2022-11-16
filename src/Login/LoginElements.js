import styled from 'styled-components';


export const BodyContainer = styled.body`
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
 `;
export const Container = styled.div`
 background-color: #fff;
 border-radius: 10px;
 display:justify;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 800px;
 height:85vh;
 max-width: 100%;
 min-height: 400px;

 `;
export const H1SignUp = styled.h5`
  display: flex;
  position:absolute;
  top: 10px;
  right: 10px;
  color: #000;
  align-content: center;
  justify-content: center;
  z-index:20;
  `;
export const H1SignIn = styled.h5`
display: flex;
  position:absolute;
  top: 10px;
  left: 10px;
  align-content: center;
  justify-content: center;
  color: #000;
  z-index:20;
  `;

export const SignUpContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  `
    : null}
 `;


export const SignInContainer = styled.div`
 position: absolute;
 top: 0;
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;

export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 35px;
 height: 100%;
 text-align: center;
 `;

export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 margin-bottom: 10px;
 `;

export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 9px 0;
 width: 100%;
 height: 35px;
 border-radius: 6px; 
 `;


export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #0b1b67;
    background-color: #0b1b67;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
export const GhostButton = styled(Button)`
 background-color: transparent;
 border-color: #ffffff;
 `;

export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 `;
export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;
${props =>
    props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background-color: #0b1b67;
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;

export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     background-image: radial-gradient( circle 976px at 51.2% 51%,  rgba(11,27,103,1) 0%, rgba(16,66,157,1) 0%, rgba(11,27,103,1) 17.3%, rgba(11,27,103,1) 58.8%, rgba(11,27,103,1) 71.4%, rgba(16,66,157,1) 100.2%, rgba(187,187,187,1) 100.2% );

     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

export const LeftOverlayPanel = styled(OverlayPanel)`
   transform: translateX(-20%);
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
 `;

export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
 `;

export const Paragraph = styled.p`
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px
 `;