import React from 'react';
// Import the CSS for styling
import './Contact.css'; // Assuming you have a Contact.css for styling

const Contact = () => {
    return (
      <div className="contact-section">

<div className="container">
        {/* Left Side */}
        <div className="left">
        <h1>
             <span className="primary">Contact  </span> Me! 
          </h1>
        <br></br>
        <p>If you'd like to get in touch, feel free to email me at <span > <a href="mailto:thovinak@mcmaster.ca" className="primary">thovinak@mcmaster.ca</a> </span>   </p>
        
         
        </div>

      
      </div>
      
      </div>
    );
  };

export default Contact;
