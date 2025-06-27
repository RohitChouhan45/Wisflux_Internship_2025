import React from 'react';
import { useAuth } from '../context/AuthContext';

function Admin() {
  const { state } = useAuth();
  return (
    <div>
      <h2>Admin Panel</h2>
      {state.user?.role === 'admin' ? (
        <p>Access granted to admin features.</p>
      ) : (
        <p>Access denied. Admins only.</p>
      )}
    </div>
  );
}

export default Admin;
