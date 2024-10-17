import React from 'react';
import Navbar2 from '../component/Navbar2';

import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';
import hero4 from '../assets/hero4.png';
import hero5 from '../assets/hero5.png';
import hero6 from '../assets/hero6.png';
import hero7 from '../assets/hero7.png';
import hero8 from '../assets/hero8.png';
import hero9 from '../assets/hero9.png';
import hero10 from '../assets/hero10.png';
import hero11 from '../assets/hero11.png';

import landingpage from '../assets/landingPageLogo.png';
import productPhoto from '../assets/productLogo.png';
import socialMedia from '../assets/socialMediaLogo.png';
import appStore from '../assets/playStoreLogo.png';
import customSize from '../assets/customSize.png';
import pitchDeck from '../assets/pitchDeck.png';

import '../styles/CreateThingsHomepage.css'; // Make sure to add this CSS file

const CreateThingsHomepage = () => {
  return (
    <>
      <Navbar2 />
      <div className="hero-container">
        <div className="background-images">
          <img src={hero1} alt="" />
          <img src={hero2} alt="" />
          <img src={hero3} alt="" />
          <img src={hero4} alt="" />
          <img src={hero5} alt="" />
          <img src={hero6} alt="" />
          <img src={hero7} alt="" />
          <img src={hero8} alt="" />
          <img src={hero9} alt="" />
          <img src={hero10} alt="" />
          {/* <img src={hero11} alt="" /> */}
        </div>
        <div className="content-overlay">
          <h1>What will you craft today</h1>
          <input type="text" placeholder="Search your content" />
          <div className="services">
            <img src={landingpage} alt="Landing Page" />
            <img src={productPhoto} alt="Product Photo" />
            <img src={appStore} alt="App Store" />
            <img src={socialMedia} alt="Social Media" />
            <img src={pitchDeck} alt="Pitch Deck" />
            <img src={customSize} alt="Custom Size" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateThingsHomepage;
