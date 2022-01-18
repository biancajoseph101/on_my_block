import React, { useState, useEffect } from 'react';
import { LoginUser } from '../services/Auth';
import { CheckSession } from '../services/Auth';

export default function Login(props) {
  const [formValues, setFormValues] = useState({
    username: '',
    password: ''
  });
  

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await LoginUser(formValues);
    // setFormValues({ username: '', password: '' });
    props.setUser(payload);
    props.toggleAuthenticated(true);
  };

  return (
    <div>
      <h1>Whats the Talk of the Town?</h1>
      <hr />
      {props.authenticated === true ? <h1>Welcome Back, {props.user.username}</h1> : null}
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

      <button onClick={props.handleLogOut} className="logoutbutton">
        LogOut
      </button>
    </div>
  );
}
