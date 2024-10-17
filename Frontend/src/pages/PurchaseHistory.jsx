import React, { Suspense ,lazy} from 'react';
import Navbar2 from '../component/Navbar2';
import '../styles/PurchaseHistory.css'; // Import the custom CSS file

// Lazy loading the image
const LazyImage = React.lazy(() => import('../assets/subscriptionLogo.png'));

function PurchaseHistory() {
  return (
    <>
     <Navbar2 />
      {/* Adding an SEO-friendly title */}
      {/* <head>
        <title>Purchase History | Track Your Subscriptions and Purchases</title>
        <meta name="description" content="View and manage your past purchases, subscriptions, and trials easily in one place. Filter by invoice, date, and more." />
      </head> */}

     

      <div className="purchase-history-container">
        <h1 className="title">Purchase History</h1>

        <div className="filters">
          {/* Search for Invoice ID */}
          <div className="filter-item">
            <label htmlFor="invoice-id">Search for Invoice ID:</label>
            <input type="text" id="invoice-id" placeholder="Enter Invoice ID" />
          </div>
          
          <div className="filter-item">
            <label htmlFor="type">Filter by Type:</label>
            <select id="type">
              <option value="subscription">Subscription</option>
              <option value="one-time">One-Time Purchase</option>
              <option value="trial">Trial</option>
            </select>
          </div>

          <div className="filter-item">
            <label htmlFor="date">Filter by Date:</label>
            <select id="date">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        <table className="responsive-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Created On</th>
              <th>Status</th>
              <th>Total Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td className="description-cell">
                  {/* Lazy loading the image */}
                  <Suspense fallback={<div>Loading...</div>}>
                    <img
                      src={LazyImage}
                      alt="Subscription purchase logo"
                      className="product-logo"
                      loading="lazy"  // Enable lazy loading
                    />
                  </Suspense>
                  <div className="description-details">
                    <p className="product-heading">Subscription Purchase</p>
                    <p className="product-id">ID: {Math.floor(Math.random() * 10000)}</p>
                  </div>
                </td>
                <td>{new Date().toLocaleDateString()}</td>
                <td>
                  <button className={`status-btn ${index % 2 === 0 ? 'paid' : 'unpaid'}`}>
                    {index % 2 === 0 ? 'Paid' : 'Unpaid'}
                  </button>
                </td>
                <td>${(Math.random() * 100).toFixed(2)}</td>
                <td className="actions-cell">
                  <a href="#">View Actions</a>
                  <span className="dots-menu">...</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PurchaseHistory;
