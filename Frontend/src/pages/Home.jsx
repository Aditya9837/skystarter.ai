import React, { Suspense, lazy } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import Navbar from '../component/Navbar';
import '../styles/Home.css';
import '../styles/generalStyles.css';




import heroImage from '../assets/hero-image.png';
import image66 from '../assets/image 66.png';
import image67 from '../assets/image 67.png';
import image68 from '../assets/image 68.png';
import image69 from '../assets/image 69.png';
import image70 from '../assets/image 70.png';
import image71 from '../assets/image 71.png';


// Lazy load components
const PlanComponent = lazy(() => import('../component/PlanComponent'));
const Faq = lazy(() => import('../component/Faq'));
const Footer = lazy(() => import('../component/Footer'));
const OurServices = lazy(() => import('../component/OurServices'));

function Home() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  return (
    <>
      <Navbar />
      <main id="home-screen">
        {/* Hero Section */}
        <section id="hero-section">
          <header>
            <h1 className="h1 black">
              Create Photos with <br />
              <span className="gradient-text">text prompts</span>
            </h1>
          </header>
          <p>
            Create stunning images using AI-generated text prompts! Whether you're a professional or an amateur, skyStarter helps you unleash creativity.
          </p>
          <button
            onClick={() => navigate(isAuthenticated ? "/prompt" : "/login")}
            className="gradient-btn"
          >
            Try skyStarter for Free
          </button>

          {/* Hero Image */}
          <div id="hero-image-container">
            <img
              className="hero-image"
              src={heroImage}
              alt="AI-powered image generation with skyStarter"
              loading="lazy"
            />
          </div>
        </section>

        {/* Partners Section */}
        <section id="hero-partners">
          <h2 className='h2'>Trusted by MSMEs Enterprises</h2>
          <div id="brands-image">
            <img src={image66} alt="Brand 1" loading="lazy" />
            <img src={image67} alt="Brand 2" loading="lazy" />
            <img src={image68} alt="Brand 3" loading="lazy" />
            <img src={image69} alt="Brand 4" loading="lazy" />
            <img src={image70} alt="Brand 5" loading="lazy" />
            <img src={image71} alt="Brand 6" loading="lazy" />
          </div>
        </section>

        {/* Lazy Loading Our Services */}
        <Suspense fallback={<div>Loading Services...</div>}>
          <OurServices />
        </Suspense>

        {/* Plans Section */}
        <section id="plan-container">
          <header id="plan-container-h1">
            <h2>The Right Plans</h2>
            <span className="gradient-text-plan-component">for the right price</span>
          </header>
          <div id="plan-component">
            <Suspense fallback={<div>Loading Plan...</div>}>
              <PlanComponent type="Free" price="$0" />
              <PlanComponent type="1 Month" price="$20" />
              <PlanComponent type="3 Month" price="$50" />
            </Suspense>
          </div>
        </section>

        {/* Lazy Loading FAQ Section */}
        <Suspense fallback={<div>Loading FAQ...</div>}>
          <Faq />
        </Suspense>

        {/* Lazy Loading Footer */}
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
}

export default Home;
