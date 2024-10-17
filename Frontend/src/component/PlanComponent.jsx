import React from 'react';
import '../styles/PlanComponent.css'
import '../styles/generalStyles.css'

function PlanComponent(props) {
  return (
    <div className="plan-container">
      <div className="plan-header">
        <h3 className="plan-type">{props.type}</h3>
        <h1 className="plan-price">{props.price}</h1>
       
      </div>

      <div className="plan-details">
        <p className="billing-info">$20 USD if billed monthly · 1 license Minimum</p>
        <ul className="plan-features">
          <li><i className="ri-check-line"></i> Brand Kits</li>
          <li><i className="ri-check-line"></i> Quality</li>
          <li><i className="ri-check-line"></i> Dimension</li>
          <li><i className="ri-check-line"></i> 365 Days Data Storage</li>
          <li><i className="ri-check-line"></i> No. of Credits</li>
        </ul>
      </div>
      <button className='blue-btn'>Subcribe</button>
    </div>
  );
}

export default PlanComponent;
