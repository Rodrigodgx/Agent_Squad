import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to Car Info!</h1>
      <p>Explore the world of cars with us.</p>
      <div className="highlights">
        <h2>Highlights</h2>
        <ul>
          <li>Discover new models</li>
          <li>Read expert reviews</li>
          <li>Find your dream car</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;