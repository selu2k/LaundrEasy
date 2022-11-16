import React from 'react';
import Icon1 from './login-svgrepo-com.svg';
import Icon2 from './man-standing-beside-a-washing-machine-of-laundry-svgrepo-com.svg';
import Icon3 from './clothes-svgrepo-com.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="howItWorks">

            <ServicesH1>How It Works</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>

                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Login</ServicesH2>
                    <ServicesP> Login to your account to access your personal details, laundry history and recieve regular updates.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Apply</ServicesH2>
                    <ServicesP> Apply for the laundry from your web device and provide required details.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Receive</ServicesH2>
                    <ServicesP> Receive realtime updates regarding your laundry service, clean clothes and a wonderful customer service.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;