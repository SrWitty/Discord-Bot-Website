// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container mt-4 text-white p-8 rounded-lg shadow-lg animate-fade-in" style={{ backgroundColor: '#28293A' }}>
      <h1 className="text-center text-4xl mb-6">About Our Discord Bot</h1>
      <p className="text-center text-lg mb-8">
        <strong>Our Discord bot is designed to provide a seamless and enjoyable experience for your server members. Explore the features and capabilities that make our bot stand out.</strong>
      </p>

      <div className="features-section mb-8 text-center">
        <h2 className="text-2xl mb-4">Key Features:</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">Feature 1</li>
          <li className="mb-2">Feature 2</li>
          <li className="mb-2">Feature 3</li>
          {/* Add more features as needed */}
        </ul>
      </div>

      <div className="why-choose-section mb-8 text-center">
        <h2 className="text-2xl mb-4">Why Choose Our Bot:</h2>
        <p className="text-lg">
          <strong>Our bot is constantly evolving to meet the needs of Discord communities. Join us on this exciting journey!</strong>
        </p>
      </div>

      <div className="join-community-section mb-8 text-center">
        <h2 className="text-2xl mb-4">Join Our Community:</h2>
        <a
          href="Discord_Server_Link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

export default About;
