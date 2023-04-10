import React from 'react';
import NavBar from '../components/NavBar';

const SignUp = () => {
  return (
    <div>
      <NavBar />
      <main>
        <h2>Sign up</h2>
        <form action="">
          <label htmlFor="FirstName">First name</label>
          <input type="text" name="FirstName" id="FirstName" />
          <label htmlFor="LastName">Last name</label>
          <input type="text" name="LastName" id="LastName" />
          <label htmlFor="Email">Email</label>
          <input type="text" name="Email" id="Email" />
          <label htmlFor="Password">Password</label>
          <input type="text" name="Password" id="Password" />
          <label htmlFor="Phone">Phone (10 characters)</label>
          <input type="number" name="Phone" id="Phone" />
          <button>Sign up</button>
        </form>
        <p>
          Already have an account? <a href="">Log in</a>
        </p>
      </main>
    </div>
  );
};

export default SignUp;
