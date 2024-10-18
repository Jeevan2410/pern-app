import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the Express backend
    axios.get('http://localhost:5000/api/message')
      .then(response => {
        setMessage(response.data.message);  // Set the message from the backend
      })
      .catch(error => {
        console.error('Error fetching data from the backend', error);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple MERN App without a Database</h1>
      <h2>{message}</h2>
    </div>
  );
}

export default App;
