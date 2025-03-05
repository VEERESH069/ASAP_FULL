import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const Home = () => {
  // State to store users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // To track loading state
  const [error, setError] = useState(null); // To track any errors

  // Fetch users from the backend when the component mounts
  useEffect(() => {
    axios
      .get('http://localhost:3000/users') // Replace with your backend API URL
      .then((response) => {
        setUsers(response.data); // Store users in state
        setLoading(false); // Set loading to false
      })
      .catch((errors) => {
        setError('Error fetching users');
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>This is my landing page</h1>
      {loading && <p>Loading...</p>} {/* Show loading message while fetching */}
      {error && <p>{error}</p>} {/* Show error message if any */}
      {!loading && !error && (
        <div>
          <h2>User List:</h2>
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                <strong>Name:</strong> {user.name} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Address:</strong> {user.address.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
