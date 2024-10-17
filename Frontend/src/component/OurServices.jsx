import React from 'react';
import socialMedia from '../assets/socialMedia.png';
import appStore from '../assets/appStore.png';
// import productPhoto from '../assets/productPhoto.png';
import landingPage from '../assets/landingPage.png';
import '../styles/OurServices.css'

const OurServices = () => {
  return (
    <div>
      <div className='box'>
        <div><img src={socialMedia} alt="Social Media" /></div>
        <div className='text-box'>
          <h1>Social Media</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente perspiciatis aliquam molestia.</p>
        </div>
      </div>
      
      <div className='box'>
        <div className='text-box'>
          <h1>Landing Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur perferendis saepe facere dolorum alias autem.</p>
        </div>
        <div>
          <img src={landingPage} alt="Landing Page" />
        </div>
      </div>
      
      <div className='box'>
        <div><img src={appStore} alt="App Store" /></div>
        <div className='text-box'>
          <h1>App Store</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In recusandae ut sed n.</p>
        </div>
      </div>
      
      <div className='box'>
        <div className='text-box'>
          <h1>Product Photo</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ad similique ipsum.</p>
        </div>
        <div><img src={socialMedia} alt="Product Photo" /></div>
      </div>
    </div>
  );
}

export default OurServices;
