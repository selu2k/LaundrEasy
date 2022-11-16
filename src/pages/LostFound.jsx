import React, { useState, useEffect } from "react";
import axios from "axios";
import ButtonLostFound from "../components/popup-form-lostfound/ButtonLostFound";
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesH2,
    ServicesH3,
    ServicesP,
    ServicesButton
} from '../styles/lost';



function MakeServicesCard(data) {
    return <ServicesCard>
        {/* key: {data.id} */}
        <ServicesH2>Item: {data.item}</ServicesH2>
        <ServicesP> <b>Description:</b>
            {data.description}</ServicesP>
        <ServicesH3><b>Phone:</b> {data.phone}</ServicesH3>
        <ServicesH3><b>Location:</b> {data.foundat}</ServicesH3>
    </ServicesCard>
}


const LostFound = () => {

    const [Data, getData] = useState(null);

    const getAllData = () => {
        axios
            .get('http://localhost/laundashphp/lostfound.php')
            .then((response) => {
                // console.log(response.data);
                const allData = response.data;
                getData(allData);
                // console.log(allDesc);
                // console.log(Description);
            });
    };

    useEffect(() => {
        getAllData();
        const interval = setInterval(() => {
            getAllData();
        }, 3000);
        return () => clearInterval(interval);
    }, [])

    if (Data) {

        return (
            <ServicesContainer id="services">
                <ServicesH1>Lost and Found</ServicesH1>
                <ServicesWrapper>
                    {Data.map(MakeServicesCard)}
                    <ServicesButton>
                        <ButtonLostFound />
                    </ServicesButton>
                </ServicesWrapper>
            </ServicesContainer>
        );
    }
    return null;
}

export default LostFound;
