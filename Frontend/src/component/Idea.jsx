import React from 'react';
import '../styles/Idea.css'; // Import your CSS file

function Idea(props) {
  return (
    <>
    
      <div style={{backgroundColor:props.backgroundColor}} className="card">
        <h1>
         <img className="card-icon" src={props.icon} alt="" />
          {props.heading}
        </h1>
        <p>{props.paragraph}</p>
      </div>
    </>
  );
}

export default Idea;
