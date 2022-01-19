import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignupUser } from '../services/Auth';

const newForm = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function Signup() {
  const [signup, setSignup] = useState(false);

  const [newUser, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SignupUser({
      username: newUser.username,
      email: newUser.email,
      password: newUser.password
    });
    setUser(newForm);
    setSignup(true);
  };
  return (
    <div>
      <h1>Get caught up with the latest neighborhood news</h1>
      {signup ? (
        <h1>
          Created account succesfully!!!<Link to="/login">Login</Link>
        </h1>
      ) : null}
      <div className="sign">
        <form onSubmit={handleSubmit}>
          <input
            className="signinput"
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="enter username"
            value={newUser.username}
            size="40"
            required
          />
          <input
            className="signinput"
            onChange={handleChange}
            id="email"
            type="text"
            placeholder="enter email"
            value={newUser.email}
            size="40"
            required
          />
          <input
            className="signinput"
            onChange={handleChange}
            id="password"
            type="password"
            placeholder="enter password"
            value={newUser.password}
            size="40"
            required
          />
          <input
            className="signinput"
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            placeholder="confirm password"
            value={newUser.confirmPassword}
            size="40"
            required
          />
          <button className="button-74">Sign Up!</button>
        </form>
      </div>
    </div>
  );
}
