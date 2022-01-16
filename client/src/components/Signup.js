import React, { useState } from 'react';
import { SignupUser } from '../services/Auth';

const newForm = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function Signup() {
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          id="username"
          type="text"
          placeholder="Username here"
          value={newUser.username}
        />
        <input
          onChange={handleChange}
          id="email"
          type="text"
          placeholder="Email goes here"
          value={newUser.email}
        />
        <input
          onChange={handleChange}
          id="password"
          type="password"
          placeholder="Password here"
          value={newUser.password}
        />
        <input
          onChange={handleChange}
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          value={newUser.confirmPassword}
        />
        <button>Sign Up!</button>
      </form>
    </div>
  );
}
