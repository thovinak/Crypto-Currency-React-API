import React from "react";
import "./Hero.css";
import Crypto from "../assets/hero-img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <p>Welcome to my project!</p>
          <h1>
            Exploring <span className="primary">CryptoCurrency </span>with
            React.
          </h1>
          <ul>
    <li> This platform seamlessly integrates <strong>React</strong>, <strong>Axios</strong>, and <strong>Chart.js</strong> for a smooth user experience.</li>
    <li><strong>Real-Time Crypto Insights:</strong> Stay updated with the latest information on the top 6 cryptocurrencies in the market.</li>
    <li><strong>Detailed Analytics:</strong> Explore an in-depth price chart for the leading cryptocurrency, dynamically updated for the most current data.</li>
</ul>



          {/* <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Contact Me!</button>
          </div> */}
        </div>

        {/* Right Side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
