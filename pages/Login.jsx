import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './Login.css'
const Login = () => {
  <Navbar></Navbar>
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    
    <div>
    <Navbar></Navbar>
    <div class="container">
      <div className='all'>
<h2>Log In</h2>
<form>
  <input class='email'
    type="email"
    placeholder="Email address"
    onChange={handleUsernameChange}
  />

  <div class="flex">
    <input
      type="password"
      placeholder="Password"
      onChange={handlePasswordChange}
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        id="eye-off"
        d="M12.392,16.769a8.718,8.718,0,0,1-9.935-5.938A8.675,8.675,0,0,1,3.817,8.2m5.1.79a2.611,2.611,0,1,1,3.692,3.692M8.914,8.985,12.6,12.675M8.916,8.986,6.053,6.124m6.554,6.554,2.863,2.863M2.929,3,6.053,6.124m0,0a8.7,8.7,0,0,1,13.011,4.707,8.723,8.723,0,0,1-3.6,4.708m0,0,3.123,3.123"
        transform="translate(-1.957 -2.293)"
        fill="none"
        stroke="#949090"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1"
      />
    </svg>
  </div>
  <div>
    <div >
      <input
        type="submit"
        value="Login Now"
        onChange={handleSubmit}
      />
      <a href='#'>Forgot your password?</a>
    </div>
  </div>
</form>
</div>
</div>
</div>


)
}

export default Login;
