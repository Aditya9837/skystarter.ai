import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing icons from react-icons

function Footer2() {
  // Inline styles
  const footerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 10px',
    flexWrap: 'wrap', // Allows items to wrap on smaller screens
  };

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    margin: '10px', // Margin added to space out items
  };

  const logoStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px',
  };

  const linkListStyle = {
    listStyle: 'none',
    padding: '0',
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap', // Allows links to wrap on smaller screens
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px', // Adjust margin for spacing between links
  };

  const socialIconsStyle = {
    fontSize: '24px',
    margin: '0 10px', // Adjust margin for spacing between icons
  };

  const copyrightContainerStyle = {
    width: '100%',
    textAlign: 'center',
    padding: '10px 0',
    borderTop: '1px solid #555', // Horizontal line
  };

  const copyrightStyle = {
    fontSize: '0.8rem',
  };

  // Media queries for responsiveness
  const mediaQueries = {
    '@media (max-width: 768px)': {
      footerStyle: {
        padding: '15px',
      },
      logoStyle: {
        fontSize: '1.25rem',
      },
      linkStyle: {
        margin: '0 5px',
      },
      socialIconsStyle: {
        fontSize: '20px',
      },
      copyrightStyle: {
        fontSize: '0.7rem',
      },
    },
  };

  return (
    <div style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <div style={logoStyle}>Logo</div>
        </div>
        <div style={sectionStyle}>
          <ul style={linkListStyle}>
            <li><a href="/privacy-policy" style={linkStyle}>Privacy Policy</a></li>
            <li><a href="/terms-and-conditions" style={linkStyle}>Terms and Conditions</a></li>
            <li><a href="/disclaimer" style={linkStyle}>Disclaimer</a></li>
          </ul>
        </div>
        <div style={sectionStyle}>
          <FaInstagram style={socialIconsStyle} />
          <FaLinkedin style={socialIconsStyle} />
        </div>
      </div>
      <div style={copyrightContainerStyle}>
        <p style={copyrightStyle}>© 2024 Your Company. All rights reserved.</p>
      </div>
      <style>{`
        @media (max-width: 768px) {
          ${Object.entries(mediaQueries['@media (max-width: 768px)']).map(([key, value]) => {
            return `${key} { ${Object.entries(value).map(([prop, val]) => `${prop}: ${val};`).join(' ')} }`;
          }).join(' ')}
        }
      `}</style>
    </div>
  );
}

export default Footer2;
