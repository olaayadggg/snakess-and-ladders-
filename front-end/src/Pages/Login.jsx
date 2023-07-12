import React from 'react'
import axios from 'axios';


const [loginData, setLoginData] = useState({
  email: '',
  password: ''
});

const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const response = await axios.post('http://localhost:8000/login', loginData);
    console.log(response.data);
    // do something with the response, such as redirect to a new page
  } catch (error) {
    console.error(error);
  }
};


export default function Login() {
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
</form>
  )
}