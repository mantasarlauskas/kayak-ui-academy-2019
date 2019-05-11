import React from 'react';

export default () => (
  <div className="container">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-centered mt-3">
        <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <h4 className="emphasized mt-3">Loading...</h4>
      </div>
    </div>
  </div>
);
