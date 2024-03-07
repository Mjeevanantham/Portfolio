import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const UserDataCollection = () => {
  const [name, setName] = useState('');
  const [cookies, setCookie] = useCookies(['userName']);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleConsent = () => {
    // Check if the user has provided a name
    if (name.trim() === '') {
      alert('Please enter your name.');
      return;
    }

    // Store the user's name in a cookie
    setCookie('userName', name, { path: '/' });
    alert('Thank you for providing your name!');
  };

  return (
    <div>
      <h1>User Data Collection</h1>
      <label>
        Your Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <button onClick={handleConsent}>Give Consent</button>
    </div>
  );
};

export default UserDataCollection;
