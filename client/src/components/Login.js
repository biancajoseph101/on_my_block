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
  const [user, setUser] = useState('');
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
    // setFormValues({ username: '', password: '' });
    setUser(payload);
    toggleAuthenticated(true);
  };

  return (
    <div>
      <h1>Whats the Talk of the Town?</h1>
      <hr />
      {authenticated === true ? <h1>Welcome Back, {user.username}</h1> : null}
      <form onSubmit={handleSubmit}>
        <input
          className="logininput"
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="put your username here"
          value={formValues.username}
          size={40}
        />
        <input
          className="logininput"
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="put your password here"
          value={formValues.password}
          size={40}
        />
        <button className="loginbutton">Login</button>
      </form>

      <button onClick={handleLogOut} className="logoutbutton">
        LogOut
      </button>
    </div>
  );
}
