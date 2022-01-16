import React, { useState, useEffect } from 'react';
import { LoginUser } from '../services/Auth';
import { CheckSession } from '../services/Auth';

export default function Login() {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });

  //maybe these states/functions/usestate should be in App.js instead -Calvin

  const [authenticated, toggleAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const handleLogOut = () => {
    //Reset all auth related state and clear localstorage
    setUser(null);
    toggleAuthenticated(false);
    localStorage.clear();
  };

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const user = await CheckSession();
    setUser(user);
    toggleAuthenticated(true);
  };

  //this probably especially should be in App.js -Calvin
  useEffect(() => {
    const token = localStorage.getItem('token');
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken();
    }
  }, []);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await LoginUser(formValues);
    setFormValues({ username: '', password: '' });
    setUser(payload);
    toggleAuthenticated(true);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="put your username here"
          value={formValues.username}
        />
        <input
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="put your password here"
          value={formValues.password}
        />
        <button>Login</button>
      </form>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
}
