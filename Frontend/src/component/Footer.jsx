import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import social media icons
import '../styles/Footer.css'; // Import the CSS file

function Footer() {
  return (
    <>
      <div className="footer-container">
        {/* Principal Office */}
        <div className="column">
          <h2 className="heading">Principal Office</h2>
          <p className="text">
            WeWork Forum, DLF Cyber City Rd, DLF Phase 3, Sector 24, Gurugram,
            Haryana 122002
          </p>
        </div>

        {/* Our Offices and Industries */}
        <div className="column">
          <h2 className="heading">Our Offices</h2>
          <p className="text">Gurugram</p>
          <p className="text">Noida</p>
          <p className="text">Varanasi</p>
          <p className="text">Abu Dhabi</p>

          <h2 className="heading">Industries</h2>
          <p className="text">Energy & Utility</p>
          <p className="text">Retail & E-Commerce</p>
          <p className="text">Travel, Hospitality & Transportation</p>
          <p className="text">Public Sector</p>
          <p className="text">Health Care & Life Science</p>
          <p className="text">Media & Entertainment</p>
          <p className="text">Banking & Finance Service</p>
          <p className="text">Education</p>
          <p className="text">Manufacturing</p>
        </div>

        {/* Reach Us and Services */}
        <div className="column">
          <h2 className="heading">Reach Us</h2>
          <p className="text">Phone: +91 7428823993, +91 8843348439</p>
          <p className="text">Email: skystarter@gmail.com</p>

          <h2 className="heading">Services</h2>
          <p className="text">Software Development</p>
          <p className="text">Mobile App Development</p>
          <p className="text">Website Development</p>
          <p className="text">Data & AI</p>
          <p className="text">E-commerce</p>
          <p className="text">ERP & CRM</p>
          <p className="text">Professional Services</p>
          <p className="text">Marketing</p>
          <p className="text">Emerging Technology</p>
          <p className="text">Cloud Technology</p>
          <p className="text">Hire Developers</p>
          <p className="text">Game Development</p>
        </div>

        {/* Subscribe and Company */}
        <div className="column">
          <h2 className="heading">Subscribe</h2>
          <p className="text">
            Keep up to date with the latest offers, industry trends, and
            technical announcements.
          </p>

          <h2 className="heading">Company</h2>
          <p className="text">Home</p>
          <p className="text">About Us</p>
          <p className="text">Blogs</p>
          <p className="text">Careers</p>
          <p className="text">Contact Us</p>
          <p className="text">Help Center</p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="hr" />

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <div className="social-icons">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaLinkedin className="icon" />
          <FaInstagram className="icon" />
        </div>
        <div>
          <p className="footer-links">
            Disclaimer | Terms Of Service | Privacy Policy | Cookie Policy
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright">
        <p className="copyright-text">
          © {new Date().getFullYear()} SkyStarter. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
