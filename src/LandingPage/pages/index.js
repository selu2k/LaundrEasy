import React, { useState } from 'react';
import Navbar from '../components/Navbar/index';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import { homeObjOne } from '../components/InfoSection/Data';
import { homeObjTwo } from '../components/InfoSection/Data';
import { homeObjThree } from '../components/InfoSection/Data';
import { homeObjFour } from '../components/InfoSection/Data';
import { homeObjArr } from '../components/InfoSection/Data';
import Footer from '../components/Footer';
import { InfoCusH1 } from '../components/InfoSection/InfoElements';


function makeSection(object) {
  return <InfoSection {...object} />
}

const Home = ({setSign}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} setSign={setSign} />
      <HeroSection setSign={setSign} />
      <InfoCusH1 id="service-header">
        The complete solution for your laundry needs
      </InfoCusH1>
      {/* <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} /> */}
      {homeObjArr.map(makeSection)}
      <Services />
      <Footer />
    </>
  );
};

export default Home;
