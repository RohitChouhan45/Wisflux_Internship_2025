import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to React Auth System</h1>
      <nav>
        <Link to="/login">Login</Link> | 
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
}

export default Home;
