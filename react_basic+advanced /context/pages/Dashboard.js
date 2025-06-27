dashboard_js = """
import React from 'react';
import { useAuth } from '../context/AuthContext';

function Dashboard() {
  const { state, dispatch } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {state.user?.name}</p>
      <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
    </div>
  );
}

export default Dashboard;
