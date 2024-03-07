import React, { useState, useEffect } from 'react';

/**
 * Functional component that makes an HTTP request to a local server
 * on port 8080 and displays the response on the user interface.
 */
const HelloWorld = () => {
  // Local state to store the server message
  const [message, setMessage] = useState('');

  // Side effect to make the HTTP request upon component mounting
  useEffect(() => {
    fetch('http://localhost:8080/') // Makes a GET request to the specified URL
      .then(response => response.text()) // Converts the response to text
      .then(data => setMessage(data)) // Updates the state with the server message
      .catch(error => console.error('Error while making the request:', error)); // Handles request errors
  }, []); // The effect runs only on component mount

  // Renders the user interface
  return (
    <div>
      <h1>Server Response:</h1>
      <p>{message}</p> {/* Displays the server message */}
    </div>
  );
};

export default HelloWorld;
