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
          <p>
            This is a React website that uses <b>CoinBase API</b> to get the
            latest and most accurate information about the <b>Top 6 </b>
            CryptoCurrencies in Canada.
          </p>

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
