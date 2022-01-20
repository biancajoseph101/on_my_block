import { Link, Redirect } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { LoginUser } from '../services/Auth';

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
      <h1>The word on the street is... </h1>
      <hr />
      {props.authenticated === true ? <Redirect to="/" /> : null}

      <form onSubmit={handleSubmit}>
        <input
          className="logininput"
          onChange={handleChange}
          name="username"
          type="text"
          placeholder="enter username"
          value={formValues.username}
          size={40}
        />
        <input
          className="logininput"
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="enter password"
          value={formValues.password}
          size={40}
        />
        <button className="loginbutton">Login</button>
      </form>
      <h1>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </h1>
    </div>
  );
}
