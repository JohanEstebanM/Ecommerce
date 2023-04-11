import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { postUser } from '../services/postUser';

const SignUp = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    role: 'admin',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postUser(user);
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <NavBar />
      <main>
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" id="firstName" onChange={handleChange} />
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" id="lastName" onChange={handleChange} />
          <label htmlFor="email">email</label>
          <input type="text" name="email" id="email" onChange={handleChange} />
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" onChange={handleChange} />
          <label htmlFor="phone">phone (10 characters)</label>
          <input type="number" name="phone" id="phone" onChange={handleChange} />
          <button type="submit">Sign up</button>
        </form>
        <p>
          Already have an account? <a href="">Log in</a>
        </p>
      </main>
    </div>
  );
};

export default SignUp;
