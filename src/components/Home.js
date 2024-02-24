// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="full-page-background animate-fade-in">
      <div className="container mt-5 text-light">
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-4">Welcome to My Discord Bot Website</h1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <p className="lead">
              Discover the incredible features of our Discord bot and become a part of our vibrant community!
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row mt-4">
          <div className="col-md-6 order-md-2">
            <h2 className="h2 mb-2 text-md-right">Join our Discord Server:</h2>
            <a
              href="Discord_Server_Link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Join Now
            </a>
          </div>
        </div>

        <hr className="my-4" />

        <div className="row mt-4">
          <div className="col-md-6">
            <h2 className="h2 mb-2">Contact and Support:</h2>
            <p className="lead">
              If you have any questions or need assistance, feel free to reach out to us at{' '}
              <a href="mailto:your.email@example.com" className="text-info">
                your.email@example.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
