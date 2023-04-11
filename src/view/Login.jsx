import React from 'react';
import LoginForm from '../components/login/LoginForm';

const Login = () => {
  return (
    <div>
      <h2>Welcome! Enter your email and password to continue</h2>
      <section>
        <h3>test data</h3>
        <div>
          <i className="fa-regular fa-envelope"></i>
          <p>el correo</p>
        </div>
        <div>
          <i className="fa-solid fa-lock"></i>
          <p>la contraseña</p>
        </div>
      </section>
      <LoginForm />
      <p>
        Don't have an account? <a href="">Sign up</a>
      </p>
    </div>
  );
};

export default Login;
