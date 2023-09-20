import React, { useState } from 'react';
import '../Styling/Login.css'; // Import your CSS file

function FitnessLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Add your authentication logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="fitness-login-container">
      <div className="fitness-login-card">
        <div className="fitness-login-header">
          <img src="fitness-logo.png" alt="Fitness Logo" className="fitness-logo" />
          <h2 className="fitness-login-heading">Fitness Login</h2>
        </div>
        <form className="fitness-login-form">
          <div className="fitness-form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="fitness-input-field"
            />
          </div>
          <div className="fitness-form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="fitness-input-field"
            />
          </div>
          <button type="button" onClick={handleLogin} className="fitness-login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default FitnessLogin;
