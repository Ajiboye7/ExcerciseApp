import React from 'react';
import Hero from '../components/Hero';
import Excercise from '../components/Excercise';
import Practical from '../components/practical';
import '../style/Home.css'; 

function Home() {
  return (
    <div className="home">
      <div className="section">
        <Hero />
      </div>
      <div className="section">
        <Excercise />
      </div>
      <div className="section">
        <Practical />
      </div>
    </div>
  );
}

export default Home;
