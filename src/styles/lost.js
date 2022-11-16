import styled from 'styled-components';

export const ServicesContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction:column;
    padding-bottom: 2em;
    /*justify-content: center;*/
    align-items:center;
    background: #F2F2F2;
 
    @media screen and (max-width: 760px){
        height:1100px;
    }
    @media screen and (max-width: 480px){
        height:1300px;
    }
`


export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin:0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 2rem;
    column-gap: 2rem;
    align-items: center;
    grid-gap: 32px;
    padding: 0 50px;
 
    @media screen and (max-width: 1000px){
        grid-template-columns:1fr 1fr;
    }
    @media screen and (max-width: 760px){
        grid-template-columns:1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    ${'' /* background: linear-gradient(rgba(251,168,207,1) 6%, rgba(245,192,213,1) 35%, rgba(240,186,206,1) 64%, rgba(245,158,202,1) 100%); */}
    ${'' /*background: linear-gradient(0deg, rgba(34,227,191,1) 8%, rgba(31,185,156,1) 100%);*/}
    
    background: linear-gradient(rgba(255,184,184,1) 6%, rgba(255,204,204,1) 35%, rgba(255,204,204,1) 64%, rgba(255,184,184,1) 100%);
    background: #cceef5;
    display:flex;
    flex-direction: column;
    border-radius: 10px;
    min-height: 325px;
    width: 250px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
 
    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 900;
    color: #071E3D;
    margin: 100px 65px 30px;
    
    padding: 5px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
   
`

export const ServicesH2 = styled.h2`
    color: #071E3D;
    font-size: 1.5rem;
    margin-bottom: 10px;
    padding: 5px;
`
export const ServicesH3 = styled.p`
    color: #071E3D;
    font-size: 1rem;
    margin-bottom: 10px;
    padding: 5px;
`
export const ServicesP = styled.p`
    color: #071E3D;
    font-size: 1rem;
    padding: 5px;
`
export const ServicesButton = styled.div`
    position: fixed;
    bottom: 40px;
    right: 75px;
`
