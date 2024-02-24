import React from 'react';

const UpdatesPage = () => {
  const updates = [
    {
      version: '1.1.0',
      date: 'March 1, 2024',
      features: ['Added dark mode', 'Improved performance'],
    },
    {
      version: '1.0.1',
      date: 'February 15, 2024',
      features: ['Bug fixes', 'Enhanced user experience'],
    },
    {
      version: '1.0.0',
      date: 'January 31, 2024',
      features: ['Initial release'],
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-white animate-fade-in">Updates and Improvements</h1>

      {updates.map((update, index) => (
        <div key={index} className="mb-8 bg-black p-6 rounded-lg shadow-md animate-fade-in">
          <h2 className="text-2xl font-bold mb-2">Version {update.version}</h2>
          <p className="text-gray-600 mb-2">Released on {update.date}</p>
          
          <ul className="list-disc list-inside ">
            {update.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UpdatesPage;
