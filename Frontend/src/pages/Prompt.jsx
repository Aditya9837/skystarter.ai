import React, { lazy, Suspense } from 'react';
import { FaImage, FaTag, FaFileAlt, FaMagic } from 'react-icons/fa';
import '../styles/Prompt.css'; // Ensure the path is correct
import frame1 from '../assets/Frame1.png';
import frame2 from '../assets/Frame2.png';
import frame3 from '../assets/Frame3.png';
import frame4 from '../assets/Frame4.png';
import frame5 from '../assets/Frame5.png';
import frame6 from '../assets/Frame6.png';
import frame7 from '../assets/Frame7.png';
import frame8 from '../assets/Frame8.png';

// Lazy load non-essential components
const Navbar2 = lazy(() => import('../component/Navbar2'));
const Footer2 = lazy(() => import('../component/Footer2'));

function Prompt() {
  return (
    <>
      {/* Lazy load Navbar */}
      <Suspense fallback={<div>Loading Navbar...</div>}>
        <Navbar2 />
      </Suspense>

      <div className="prompt-container">
        <header className="prompt-header">
          <h1>Generate Social Creatives</h1>
          <p>
            Lorem ipsu dolor sit amet consectetu, adipisicing elit. Et cupiditate, consequuntur neque officia laborum minus
          </p>
        </header>

        <section className="prompt-section">
          <article className="prompt-card">
            <FaFileAlt className="prompt-card-icon" />
            <div className="prompt-card-content">
              <h2>Description</h2>
              <p>A collage of favorite memories</p>
            </div>
          </article>

          <article className="prompt-card">
            <FaImage className="prompt-card-icon" />
            <div className="prompt-card-content">
              <h2>Images</h2>
              <p>Add an image</p>
            </div>
          </article>

          <article className="prompt-card">
            <FaTag className="prompt-card-icon" />
            <div className="prompt-card-content">
              <h2>Brand</h2>
              <p>Add brand</p>
            </div>
          </article>

          <div className="button-container">
            <button className="generate-button">
              <FaMagic /> Generate
            </button>
          </div>
        </section>
      </div>

      {/* My Creations Section */}
      <section className="my-creations-container">
        <h2>My Creations</h2>
        <div className="image-grid">
          {[frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Creation ${index + 1}`}
              loading="lazy" // Lazy load the images
            />
          ))}
        </div>
      </section>

      {/* Lazy load Footer */}
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer2 />
      </Suspense>
    </>
  );
}

export default Prompt;
