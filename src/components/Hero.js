import React from 'react';
import logo from '../Images/Hero2.avif';
import '../style/Hero.css'; 

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <h1>Exercise is the key to a Healthy Lifestyle</h1>
        <p>Engaging in regular physical activity is crucial for maintaining good health and wellness. 
        <br/>Whether it's a daily jog, a gym workout, or a yoga session, staying active can improve your mood,boost your energy levels, and reduce the risk of chronic diseases.
        <br/>Start your fitness journey today and experience the benefits of a healthy lifestyle!</p>
        <p>Check out for the most effective excercise for you</p>
        <button>Explore Excercise</button>
      </div>
      <div className="hero-image">
        <img src={logo} alt="Exercise" />
      </div>
    </div>
  );
}

export default Hero;
