// src/components/Developers.js
import React from 'react';

const developers = [
  {
    name: 'iim7md11',
    role: 'Lead Developer',
    image: '/images/lead.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Ak-47',
    role: 'Tester',
    image: '/images/lead.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
 
];

const Developers = () => {
  return (
    <div className="container mx-auto p-8 animate-fade-in">
      <h1 className="text-4xl font-bold mb-6">Meet Our Developers</h1>

      {developers.map((developer, index) => (
        <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-4">
            <img src={process.env.PUBLIC_URL + developer.image} alt={developer.name} className="rounded-full w-20 h-20 mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-black">{developer.name}</h2> 
              <p className="text-gray-600">{developer.role}</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">{developer.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Developers;
