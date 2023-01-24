import React, { useState } from 'react';
import './RandomPasswordGenerator.css';

function RandomPasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(5);
  const [password, setPassword] = useState('');

  const handleLengthChange = (e) => {
    setPasswordLength(e.target.value);
  };

  const generatePassword = () => {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&';
    let password = '';
    let firstChar = characters.charAt(Math.floor(Math.random() * 26)).toUpperCase();
    password += firstChar;
    for (let i = 1; i < passwordLength - 1; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    let lastChar = characters.charAt(Math.floor(Math.random() * 14) + 62);
    password += lastChar;
    setPassword(password);
  };

  return (
    <div className="password-generator">
        <h1>Random Password Generator</h1>
    <label>
      Password Length:
      <input
        className="password-length"
        type="number"
        min="5"
        max="10"
        value={passwordLength}
        onChange={handleLengthChange}
      />
    </label>
    <button className="generate-button" onClick={generatePassword}>Generate Password</button>
    <p className="password">{password}</p>
  </div>
  );
}

export default RandomPasswordGenerator;