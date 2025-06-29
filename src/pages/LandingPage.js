import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem', backgroundImage: 'url("/assets/images/plant1.jpg")', backgroundSize: 'cover', height: '100vh' }}>
      <h1 style={{ color: '#fff' }}>Welcome to the Houseplant Store</h1>
      <Link to="/products">
        <button style={{ padding: '1rem 2rem', fontSize: '1rem', marginTop: '2rem' }}>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
