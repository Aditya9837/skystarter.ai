import React, { useState } from 'react';
import '../styles/PlansAndPricing.css'; // Import the custom CSS file
import Navbar2 from '../component/Navbar2';

function PlansAndPricing() {
  const [plan, setPlan] = useState('monthly'); // State to manage the selected plan

  // Function to toggle between monthly and annually
  const togglePlan = (selectedPlan) => {
    setPlan(selectedPlan);
  };

  return (
    <>
    <Navbar2/>
      <div className="pricing-container">
        <h1 className="title">Find the right plan for your site</h1>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia iure dolor est iusto deleniti dicta mollitia.
        </p>

        <div className="toggle-btn-container">
          <button
            className={`toggle-btn ${plan === 'monthly' ? 'active' : ''}`}
            onClick={() => togglePlan('monthly')}
          >
            Monthly
          </button>
          <button
            className={`toggle-btn ${plan === 'annually' ? 'active' : ''}`}
            onClick={() => togglePlan('annually')}
          >
            Annually
          </button>
        </div>

        <div className={`plans-container ${plan === 'monthly' ? 'fade-in' : 'fade-out'}`}>
          {plan === 'monthly' ? (
            <div className="plan-details">
              <h2>Monthly Plans</h2>
              <p>Plan 1: $10/month</p>
              <p>Plan 2: $20/month</p>
              <p>Plan 3: $30/month</p>
            </div>
          ) : (
            <div className="plan-details">
              <h2>Annual Plans</h2>
              <p>Plan 1: $100/year</p>
              <p>Plan 2: $200/year</p>
              <p>Plan 3: $300/year</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PlansAndPricing;
