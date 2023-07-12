import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [userId, setUserId] = useState(null); // add state to store the user ID

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', loginData);
      console.log(response.data);
      setUserId(response.data.userId); // store the user ID in state
      // do something with the response, such as redirect to a new page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={loginData.email}
          onChange={(event) => setLoginData({ ...loginData, email: event.target.value })}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={loginData.password}
          onChange={(event) => setLoginData({ ...loginData, password: event.target.value })}
        />
      </label>
      <button type="submit">Login</button>
      {userId && <p>Logged in as user ID {userId}</p>} {/* display the user ID if it's available */}
    </form>
  );
}